#!/bin/bash

declare htaccess_config_default="htaccess.conf";
declare htaccess_output_default="./.htaccess"
declare repo_root="$(cd "$(dirname "$0")" && cd ../../ && pwd)"

# ----------------------------------------------------------------------
# | Helper functions                                                   |
# ----------------------------------------------------------------------

create_htaccess() {

    local file="${1}"
    local config="${2}"

    insert_line "$(node ${repo_root}/bin/build/create_header.js)" "$file"
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
            if [ ! -f "${filename}" ]; then
                filename="${repo_root}/${filename}"
            fi

            if [ ! -f "${filename}" ]; then
                print_error ".htaccess partial '${filename}' does not exist."
                exit 1
            fi

            insert_file "${filename}" "$file"
            insert_line "" "$file"
            ;;
        "disable")
            if [ ! -f "${filename}" ]; then
                filename="${repo_root}/${filename}"
            fi

            if [ ! -f "${filename}" ]; then
                print_error ".htaccess partial '${filename}' does not exist."
                exit 1
            fi

            insert_file_comment_out "${filename}" "$file"
            insert_line "" "$file"
            ;;
        "omit")
            # noop
            ;;
        *)
            print_error "Invalid keyword '${keyword}' for entry '${filename}'"
            exit 1
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
        cat "${repo_root}/src/files_match_pattern" | \
        sed '/^#/d' | \
        tr -s '[:space:]' '|' | \
        sed 's/|$//' \
    )/g" -i "" "$1"
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
    local htaccess_output="${1}"
    local htaccess_config="${2}"
    local htaccess_output_directory="$(dirname "${htaccess_output}")"
    local htaccess_output_tmp="${htaccess_output_directory}/htaccess.tmp"


    if [ -z "${htaccess_config}" ]; then
        if [ -f "${PWD}/${htaccess_config_default}" ]; then
            htaccess_config="${PWD}/${htaccess_config_default}"
        else
            htaccess_config="${repo_root}/${htaccess_config_default}"
        fi;
    fi

    if [ ! -f "${htaccess_config}" ]; then
        print_error "'${htaccess_config}' does not exist."
        exit 1
    fi

    mkdir -p "${htaccess_output_directory}"
    create_htaccess "${htaccess_output_tmp}" "${htaccess_config}"
    create_htaccess_result=$?

    print_result $create_htaccess_result "Build .htaccess, exit code was '${create_htaccess_result}'"

    if [ $create_htaccess_result ]; then

        # Create backup first, just in case $htaccess_output exists
        if [ -f "${htaccess_output}" ]; then
            local backup_name="${htaccess_output}~"
            mv "${htaccess_output}" "${backup_name}"
            print_result $? "Create backup: '${backup_name}'"
        fi

        # Finally, move temp .htaccess to target
        mv "${htaccess_output_tmp}" "${htaccess_output}"
        print_result $? "Moved in place: '${htaccess_output}'"
    fi

}

main "${1:-$htaccess_output_default}" "${2}"
