#!/bin/bash

declare -r CONFIGS_DIR="$BUILD_DIR/bin/setup/configs"
declare -r CONTENT_DIR="$BUILD_DIR/test/fixtures"

declare -r MAIN_CONFIG_FILE_2_2_X="/etc/apache2/apache2.conf"
declare -r MAIN_CONFIG_FILE_2_4_X="/usr/local/apache2/conf/httpd.conf"

declare -r REQUIRED_MODULES="autoindex \
                             deflate \
                             expires \
                             filter \
                             headers \
                             include \
                             mime \
                             rewrite \
                             setenvif"

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

add_line_to_file() {
    execute "printf '$1\n' >> $2"
}

execute() {
    sudo bash -c "$1"
}

install_package() {
    sudo apt-get install --assume-yes --force-yes --quiet "$1"
}

setup_apache_2_2_x() {

    update

    # Install Apache 2.2.x
    install_package "apache2"

    # Enable required modules
    sudo a2enmod "$REQUIRED_MODULES"

    # Add `ServerTokens Prod` to the main configuration file in order to test
    # if Apache hides the server software information (this directive doesn't
    # work in the `.htaccess` file)
    # https://httpd.apache.org/docs/current/mod/core.html#servertokens
    add_line_to_file "ServerTokens Prod" "$MAIN_CONFIG_FILE_2_2_X"

    # Enable custom Virtual Host
    execute "cat $CONFIGS_DIR/2.2.x.conf \
                | sed 's|{{path}}|$CONTENT_DIR|g' \
                > /etc/apache2/sites-available/2.2.x.conf"
    sudo a2dissite default
    sudo a2ensite 2.2.x.conf

}

setup_apache_2_4_x() {

    update

    # Install packages required in order to compile Apache from source
    install_package "llibapr1-dev"
    install_package "libaprutil1-dev"

    # Get the name of the latest Apache 2.4.x release
    local tmp="$( curl -sSL http://www.us.apache.org/dist/httpd/ \
                  | sed -n 's/.*href="\(httpd-2.4.[0-9]\+\).tar.gz".*/\1/p' )"

    # Download archive
    $(curl -sSL "http://www.us.apache.org/dist/httpd/$tmp.tar.gz" -o "/tmp/$tmp.tar.gz")

    # Extract archive
    tar -xzvf "/tmp/$tmp.tar.gz" -C "/tmp"
    cd "/tmp/$tmp"

    # Compile and install Apache 2.4.x
    # https://httpd.apache.org/docs/current/programs/configure.html
    sudo ./configure --enable-mods-static="$REQUIRED_MODULES" \
                     --prefix=/usr/local/apache2 \
                     --quiet
    sudo make
    sudo make install

    # Add `ServerTokens Prod` to the main configuration file in order to test
    # if Apache hides the server software information (this directive doesn't
    # work in the `.htaccess` file)
    # https://httpd.apache.org/docs/current/mod/core.html#servertokens
    add_line_to_file "ServerTokens Prod" "$MAIN_CONFIG_FILE_2_4_X"

    # Enable custom Virtual Host
    execute "cat $CONFIGS_DIR/2.4.x.conf \
                | sed 's|{{path}}|$CONTENT_DIR|g' \
                > /usr/local/apache2/conf/extra/2.4.x.conf"
    add_line_to_file "Include conf/extra/2.4.x.conf" "$MAIN_CONFIG_FILE_2_4_X"

}

update() {
    # Resynchronize the package index files from their sources
    execute "sudo apt-get update -qqy" "update"
    #                              │└─ assume "yes" as the
    #                              │   answer to all prompts
    #                              └─ suppress output
}

# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

main() {
    if [ "$1" == "2.2.x" ]; then
        setup_apache_2_2_x
    elif [ "$1" == "2.4.x" ]; then
        setup_apache_2_4_x
    elif [ -z "$1" ]; then
        printf "The 'APACHE_VERSION' environment variable needs to be set!\n" \
            && exit 1
    else
        printf "'%s' is not a valid value for the 'APACHE_VERSION' environment variable!\n" $APACHE_VERSION \
            && exit 1
    fi
}

main "$APACHE_VERSION"
