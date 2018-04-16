#!/bin/bash

# Install Apache

sudo apt-get update
sudo apt-get install apache2 #=${APACHE_VERSION}.\*

# Enable required modules

sudo a2enmod autoindex deflate expires filter headers include mime rewrite setenvif

# Configure apache virtual hosts

sudo cp -f bin/setup_configs/${APACHE_VERSION}.conf /etc/apache2/sites-available/${CONF_TARGET}
sudo sed -e "s?%TRAVIS_BUILD_DIR%?$(pwd)/test/fixtures?g" --in-place /etc/apache2/sites-available/${CONF_TARGET}
sudo chmod 777 -R $HOME

# Add `ServerTokens Prod` to the main configuration file in order
# to test if Apache hides the server software information (this
# directive doesn't work in the `.htaccess` file).
#
# https://httpd.apache.org/docs/current/mod/core.html#servertokens

sudo sh -c "printf 'ServerTokens Prod\n' >> /etc/apache2/apache2.conf"

# Check config and restart apache

sudo service apache2 restart
