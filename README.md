# [Apache Server Configs](https://github.com/h5bp/server-configs-apache/)

[![Build Status](https://travis-ci.org/h5bp/server-configs-apache.svg)](https://travis-ci.org/h5bp/server-configs-apache)
[![devDependency Status](https://david-dm.org/h5bp/server-configs-apache/dev-status.svg)](https://david-dm.org/h5bp/server-configs-apache#info=devDependencies)

__Apache Server Configs__ is a collection of boilerplate
configurations that can help your server improve the web site's
performance and security, while also ensuring that resources are
served with the correct content-type and are accessible, if needed,
even cross-domain.


## Getting Started

There are a few options for getting the Apache server configs:

* Download the [zip archive](https://github.com/h5bp/server-configs-apache/releases/download/2.14.0/htaccess-2.14.0.zip)
* Install them via:
    * [npm](https://npmjs.org/): `npm install --save-dev apache-server-configs`
    * [Bower](http://bower.io/): `bower install --save-dev apache-server-configs`


## Usage

If you have access to the [main server configuration
file](https://httpd.apache.org/docs/current/configuring.html#main)
(usually called `httpd.conf`), you should add the logic from the
[`.htaccess`](https://github.com/h5bp/server-configs-apache/blob/master/dist/.htaccess)
file in, for example, a
[`<Directory>`](https://httpd.apache.org/docs/current/mod/core.html#directory)
section in the main configuration file. This is usually the recommended
way, as using `.htaccess` files [slows
down](https://httpd.apache.org/docs/current/howto/htaccess.html#when)
Apache!

If you don't have access, which is quite common with hosting services,
just copy the [`.htaccess`](https://github.com/h5bp/server-configs-apache/blob/master/dist/.htaccess)
file in the root of the website.

Also note that some configurations won't have any effect if the
appropriate modules aren't enabled. So, in order for everything
to work as intended, you need to ensure the you have the following
Apache modules [enabled](https://github.com/h5bp/server-configs-apache/wiki/How-to-enable-Apache-modules):
  * [`mod_autoindex.c` (autoindex_module)](https://httpd.apache.org/docs/current/mod/mod_autoindex.html)
  * [`mod_deflate.c` (deflate_module)](https://httpd.apache.org/docs/current/mod/mod_deflate.html)
  * [`mod_expires.c` (expires_module)](https://httpd.apache.org/docs/current/mod/mod_expires.html)
  * [`mod_filter.c` (filter_module)](https://httpd.apache.org/docs/current/mod/mod_filter.html)
  * [`mod_headers.c` (headers_module)](https://httpd.apache.org/docs/current/mod/mod_headers.html)
  * [`mod_include.c` (include_module)](https://httpd.apache.org/docs/current/mod/mod_include.html)
  * [`mod_mime.c` (mime_module)](https://httpd.apache.org/docs/current/mod/mod_mime.html)
  * [`mod_rewrite.c` (rewrite_module)](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)
  * [`mod_setenvif.c` (setenvif_module)](https://httpd.apache.org/docs/current/mod/mod_setenvif.html)

For more detailed information on configuration files and how to
use them, please check the appropriate Apache documentation:

* https://httpd.apache.org/docs/current/configuring.html
* https://httpd.apache.org/docs/current/howto/htaccess.html


## Support

* #### __Apache v2.2.0+__

* #### __Browsers:__

  * Chrome
  * Firefox 4+
  * Internet Explorer 8+
  * Opera 12+
  * Safari 5+


## Contributing

Anyone and everyone is welcome to contribute, but before you do,
please take a moment to review the [guidelines](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)


## Acknowledgements

[Apache Server Configs](https://github.com/h5bp/server-configs-apache/) is
only possible thanks to all the awesome
[contributors](https://github.com/h5bp/server-configs-apache/graphs/contributors)!


## License

The code is available under the [MIT license](LICENSE.txt).
