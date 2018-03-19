#!/bin/bash

declare htaccess_config;
declare htaccess_config_default="htaccess.conf";
declare htaccess_output_default="dist/.htaccess"

# ----------------------------------------------------------------------
# | Helper functions                                                   |
# ----------------------------------------------------------------------

clean() {
    for removee in "$@"
    do
        rm -rf "${removee}"
    done
}

create_htaccess() {

    local config="${1}"
    local file="${2}"

    insert_line "$(node bin/build/create_header.js)" "$file"
    insert_line "" "$file"
    insert_line "# (!) Using \`.htaccess\` files slows down Apache, therefore, if you have" "$file"
    insert_line "# access to the main server configuration file (which is usually called" "$file"
    insert_line "# \`httpd.conf\`), you should add this logic there." "$file"
    insert_line "#" "$file"
    insert_line "# https://httpd.apache.org/docs/current/howto/htaccess.html" "$file"
    insert_line "" "$file"


    while IFS=$" " read keyword filename; do

        # Skip lines which
        [[ "${keyword}" =~ ^[[:space:]]*# ]] && continue
        [ -z "${keyword}" ] && continue

        # Remove quotes surrounding
        filename="${filename%\"}"
        filename="${filename#\"}"

        # Evaluate
        case "${keyword}" in
        "title")
            insert_header "${filename}" "$file"
            insert_line "" "$file"
            ;;
        "enable")
            insert_file "${filename}" "$file"
            insert_line "" "$file"
            ;;
        "disable")
            insert_file_comment_out "${filename}" "$file"
            insert_line "" "$file"
            ;;
        "omit")
            # noop
            ;;
        *)
            print_error "Invalid keyword '${keyword}' for entry '${filename}'"
            return 1
            ;;
        esac

    done < "${config}"

    apply_pattern "$file"

}

insert_line() {
    printf "$1\n" >> "$2"
}

insert_file() {
    cat "$1" >> "$2"
}

insert_file_comment_out() {
    printf "%s\n" "$(cat "$1" | sed -E 's/^([^#])(.+)$/# \1\2/g')" >> "$2"
}

# Includes or "includes-and-comments-out":
insert_file_if() {
    if [ ${partials["${1}"]} = true ]; then
        insert_file "${1}" "${2}"
    else
        insert_file_comment_out "${1}" "${2}"
    fi
}

insert_header() {
    local title="$(printf "$1" | tr '[:lower:]' '[:upper:]')"

    insert_line "# ######################################################################" "$2"
    insert_line "# # $title $(insert_space "$title") #" "$2"
    insert_line "# ######################################################################" "$2"
}

insert_space() {
    total=65
    occupied=$(printf "$1" | wc -c)
    difference=$(( $total - $occupied ))
    printf '%0.s ' $(seq 1 $difference)
}

apply_pattern() {
    sed -e "s/%FilesMatchPattern%/$( \
        cat "src/files_match_pattern" | \
        sed '/^#/d' | \
        tr -s '[:space:]' '|' | \
        sed 's/|$//' \
    )/g" --in-place "$1"
}

print_error() {
    # Print output in red
    printf "\e[0;31m [✖] $1 $2\e[0m\n"
}

print_info() {
    # Print output in purple
    printf "\n\e[0;35m $1\e[0m\n\n"
}

print_result() {
    [ $1 -eq 0 ] \
        && print_success "$2" \
        || print_error "$2"
}

print_success() {
    # Print output in green
    printf "\e[0;32m [✔] $1\e[0m\n"
}

# ----------------------------------------------------------------------
# | Main                                                               |
# ----------------------------------------------------------------------

main() {
    local htaccess_config="${1}"
    local htaccess_output="${2}"
    local htaccess_output_directory="$(dirname "${htaccess_output}")"

    if [ ! -f "${htaccess_config}" ]; then
        print_error "'${htaccess_config}' does not exist."
        exit 1
    fi

    clean "${htaccess_output}"
    print_result $? "Clean"

    mkdir -p "${htaccess_output_directory}"

    create_htaccess "${htaccess_config}" "${htaccess_output}"
    print_result $? "Create '${htaccess_output}'"
}

main "${1:-$htaccess_config_default}" "${2:-$htaccess_output_default}"
