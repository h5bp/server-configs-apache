#!/bin/bash

declare repo_root="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd )"
declare build_command="${repo_root}/bin/build.sh"
declare temp_directory="$(mktemp -d ${TMPDIR:-/tmp/}server-configs-apache.XXXXXXXXXXXX)"

# ---------------------------------------------------------------------
# TODO - Help appreciated
#
# The grep expression used in assert_file_contains() is too permissive
# when searching for multi-line strings in $search_content,
# like the node command below produces.
#
# For now, a singe-liner must do it in $search_content...
# ---------------------------------------------------------------------

declare search_content="Apache Server Configs"

# ----------------------------------------------------------------------
# | File system                                                        |
# ----------------------------------------------------------------------

prepare_temp_dir() {
    cd "${temp_directory}"
    rm -Rf *
    touch "existing.conf"
}

# Default Exit or SIGINT(2) handler
trapCleanupTempDir() {
    [ -d "${temp_directory}" ] \
    && rm -Rf "${temp_directory}"
}

trap trapCleanupTempDir EXIT SIGINT

# ----------------------------------------------------------------------
# | Helper functions                                                   |
# ----------------------------------------------------------------------

execute_htaccess_builder() {
    prepare_temp_dir

    output_file="${1}"
    config_file="${2}"

    "${build_command}" "${output_file}" "${config_file}"
    return $?
}

print_error() {
    # Print output in red
    printf "\e[0;31m [✖] $1 $2\e[0m\n"
}

print_success() {
    # Print output in green
    printf "\e[0;32m [✔] $1\e[0m\n"
}

# ----------------------------------------------------------------------
# | Assertions                                                         |
# ----------------------------------------------------------------------

assert_exit_code() {
    local expected_exit_code="$1"
    local real_exit_code="$2"

    if [ "${expected_exit_code}" != "${real_exit_code}" ]; then
        print_error "Wrong exit code"
        printf "Expected '%s', instead saw '%s'\\n" "${expected_exit_code}" "${real_exit_code}"
        exit 1
    fi;
}

assert_file_exists() {
    local expected_file="${1}"

    if [ ! -f "${expected_file}" ]; then
        print_error "File not found"
        printf "Expected file does not exist: '%s'\\n" "${expected_file}"
        exit 1
    fi
}

assert_file_contains() {
    local output_file="${1}"
    local search_content="${2}"

    # TODO - Help appreciated
    # This is too permissive, e.g.: Given a three-line $search_content,
    # grep also produces output when only one of those three lines is matching.
    # It rather should test for ALL lines in $search_content...
    if [ -z "$(grep "${search_content}" "${PWD}/${output_file}")" ]; then
        print_error "Content mismatch"
        printf "Output file '%s' lacks expected string: '%s'\\n" "${output_file}" "${search_content}"
        exit 1
    fi
}

assert_file_not_contains() {
    local output_file="${1}"
    local search_content="${2}"

    # TODO - Help appreciated
    # This is too permissive, e.g.: Given a three-line $search_content,
    # grep also produces output when only one of those three lines is matching.
    # It rather should test for ALL lines in $search_content...
    if [ ! -z "$(grep "${search_content}" "${PWD}/${output_file}")" ]; then
        print_error "Content mismatch"
        printf "Output file '%s' in fact does contain string: '%s'\\n" "${output_file}" "${search_content}"
        exit 1
    fi
}

# ----------------------------------------------------------------------
# | Main                                                               |
# ----------------------------------------------------------------------

main() {

    echo;
    echo "Call w/o any parameter"
    output_file="./.htaccess"

    execute_htaccess_builder "${output_file}"
       assert_exit_code 0 $? \
    && assert_file_exists "${output_file}" \
    && assert_file_contains "${output_file}" "${search_content}" \
    && print_success "TEST OK"



    echo;
    echo "Call with custom output path"
    output_file="path/to/subdir/.htaccess"

    execute_htaccess_builder "${output_file}"
       assert_exit_code 0 $? \
    && assert_file_exists "${output_file}" \
    && assert_file_contains "${output_file}" "${search_content}" \
    && print_success "TEST OK"



    echo;
    echo "Call with custom output path and existing custom config file"
    output_file="path/to/another/subdir/.htaccess"

    execute_htaccess_builder "${output_file}" "existing.conf"
       assert_exit_code 0 $? \
    && assert_file_exists "${output_file}" \
    && assert_file_contains "${output_file}" "${search_content}" \
    && print_success "TEST OK"



    echo;
    echo "Call with custom output path and not-existing custom config file"
    output_file="path/to/somewhere/else/.htaccess"

    execute_htaccess_builder "${output_file}" "foobar.conf"
       assert_exit_code 1 $? \
    && print_success "TEST OK"



    echo;
    echo "Test valid configuration file"
    output_file=".htaccess"

    execute_htaccess_builder "${output_file}" "${repo_root}/test/htaccess_mock_valid.conf"
       assert_exit_code 0 $? \
    && assert_file_exists "${output_file}" \
    && assert_file_contains "${output_file}" "THE TITLE" \
    && assert_file_contains "${output_file}" "AAAAAA" \
    && assert_file_contains "${output_file}" "# BBBBBB" \
    && assert_file_not_contains "${output_file}" "CCCCCC" \
    && print_success "TEST OK"



    echo;
    echo "Test invalid configuration file"
    output_file=".htaccess"

    execute_htaccess_builder "${output_file}" "${repo_root}/test/htaccess_mock_invalid.conf"
       assert_exit_code 1 $? \
    && print_success "TEST OK"



    # Any failing test should have caused 'exit 1' before,
    # so if this scripts executes right here, everything went fine.

    echo;
    echo "Summary"
    print_success "All tests succeeded."
    echo;
}

main
