#!/bin/bash

# ----------------------------------------------------------------------
# | Helper functions                                                   |
# ----------------------------------------------------------------------

clean() {
    rm -rf dist/
    rm -rf test/fixtures/.htaccess
}

create_htaccess() {

    local file="dist/.htaccess"

    insert_line "$(node bin/build/create_header.js)" "$file"
    insert_line "" "$file"
    insert_line "# (!) Using \`.htaccess\` files slows down Apache, therefore, if you have" "$file"
    insert_line "# access to the main server configuration file (which is usually called" "$file"
    insert_line "# \`httpd.conf\`), you should add this logic there." "$file"
    insert_line "#" "$file"
    insert_line "# https://httpd.apache.org/docs/current/howto/htaccess.html" "$file"
    insert_line "" "$file"

    insert_header "cross-origin" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/cross-origin/requests.conf" "$file"
    insert_line "" "$file"
    insert_file "src/cross-origin/images.conf" "$file"
    insert_line "" "$file"
    insert_file "src/cross-origin/web_fonts.conf" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/cross-origin/resource_timing.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "errors" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/errors/custom_errors.conf" "$file"
    insert_line "" "$file"
    insert_file "src/errors/error_prevention.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "internet explorer" "$file"
    insert_line "" "$file"
    insert_file "src/internet_explorer/x-ua-compatible.conf" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/internet_explorer/iframes_cookies.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "media types and character encodings" "$file"
    insert_line "" "$file"
    insert_file "src/media_types/media_types.conf" "$file"
    insert_line "" "$file"
    insert_file "src/media_types/character_encodings.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "rewrites" "$file"
    insert_line "" "$file"
    insert_file "src/rewrites/rewrite_engine.conf" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/rewrites/rewrite_http_to_https.conf" "$file"
    insert_line "" "$file"
    insert_file "src/rewrites/rewrite_www.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "security" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/security/x-frame-option.conf" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/security/content-security-policy.conf" "$file"
    insert_line "" "$file"
    insert_file "src/security/file_access.conf" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/security/strict-transport-security.conf" "$file"
    insert_line "" "$file"
    insert_file "src/security/x-content-type-option.conf" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/security/x-xss-protection.conf" "$file"
    insert_line "" "$file"
    insert_file "src/security/x-powered-by.conf" "$file"
    insert_line "" "$file"
    insert_file "src/security/server_software_information.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "web performance" "$file"
    insert_line "" "$file"
    insert_file "src/web_performance/compression.conf" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/web_performance/content_transformation.conf" "$file"
    insert_line "" "$file"
    insert_file "src/web_performance/etags.conf" "$file"
    insert_line "" "$file"
    insert_file "src/web_performance/expires_headers.conf" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/web_performance/file_concatenation.conf" "$file"
    insert_line "" "$file"
    insert_file_comment_out "src/web_performance/filename-based_cache_busting.conf" "$file"

    apply_pattern "$file"

}

create_htaccess_fixture() {

    local file="test/fixtures/.htaccess"

    insert_line "$(node bin/build/create_header.js)" "$file"
    insert_line "" "$file"
    insert_header "cross-origin" "$file"
    insert_line "" "$file"
    insert_file "src/cross-origin/images.conf" "$file"
    insert_line "" "$file"
    insert_file "src/cross-origin/web_fonts.conf" "$file"
    insert_line "" "$file"
    insert_file "src/cross-origin/resource_timing.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "errors" "$file"
    insert_line "" "$file"
    insert_file "src/errors/custom_errors.conf" "$file"
    insert_line "" "$file"
    insert_file "src/errors/error_prevention.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "internet explorer" "$file"
    insert_line "" "$file"
    insert_file "src/internet_explorer/x-ua-compatible.conf" "$file"
    insert_line "" "$file"
    insert_file "src/internet_explorer/iframes_cookies.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "media types and character encodings" "$file"
    insert_line "" "$file"
    insert_file "src/media_types/media_types.conf" "$file"
    insert_line "" "$file"
    insert_file "src/media_types/character_encodings.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "rewrites" "$file"
    insert_line "" "$file"
    insert_file "src/rewrites/rewrite_engine.conf" "$file"
    insert_line "" "$file"
    insert_file "src/rewrites/rewrite_www.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "security" "$file"
    insert_line "" "$file"
    insert_file "src/security/x-frame-option.conf" "$file"
    insert_line "" "$file"
    insert_file "src/security/content-security-policy.conf" "$file"
    insert_line "" "$file"
    insert_file "src/security/file_access.conf" "$file"
    insert_line "" "$file"
    insert_file "src/security/strict-transport-security.conf" "$file"
    insert_line "" "$file"
    insert_file "src/security/x-content-type-option.conf" "$file"
    insert_line "" "$file"
    insert_file "src/security/x-xss-protection.conf" "$file"
    insert_line "" "$file"
    insert_file "src/security/x-powered-by.conf" "$file"
    insert_line "" "$file"
    insert_file "src/security/server_software_information.conf" "$file"
    insert_line "" "$file"
    insert_line "" "$file"

    insert_header "web performance" "$file"
    insert_line "" "$file"
    insert_file "src/web_performance/compression.conf" "$file"
    insert_line "" "$file"
    insert_file "src/web_performance/content_transformation.conf" "$file"
    insert_line "" "$file"
    insert_file "src/web_performance/etags.conf" "$file"
    insert_line "" "$file"
    insert_file "src/web_performance/expires_headers.conf" "$file"
    insert_line "" "$file"
    insert_file "src/web_performance/file_concatenation.conf" "$file"
    insert_line "" "$file"
    insert_file "src/web_performance/filename-based_cache_busting.conf" "$file"

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

    cd "${BASH_SOURCE%/*}" && cd ../../

    clean
    print_result $? "Clean"

    mkdir dist/

    create_htaccess
    print_result $? "Create '.htaccess'"

    create_htaccess_fixture
    print_result $? "Create '.htaccess' fixture"

}

main
