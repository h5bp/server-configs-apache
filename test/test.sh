#!/bin/bash

# Run tests for Apache 2.2.x
sudo service apache2 restart
mocha -R spec --timeout 10000 || exit 1
sudo service apache2 stop

# Run tests for Apache 2.4.x
sudo /usr/local/apache2/bin/apachectl start
mocha -R spec --timeout 10000
