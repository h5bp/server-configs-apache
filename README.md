# [Apache Server Configs](https://github.com/h5bp/server-configs-apache/)

[![Build Status](https://img.shields.io/travis/h5bp/server-configs-apache/master.svg)](https://travis-ci.org/h5bp/server-configs-apache)
[![devDependency Status](https://img.shields.io/david/dev/h5bp/server-configs-apache.svg)](https://david-dm.org/h5bp/server-configs-apache?type=dev)

__Apache Server Configs__ is a collection of boilerplate
configurations that can help your server improve the web site's
performance and security, while also ensuring that resources are
served with the correct content-type and are accessible, if needed,
even cross-domain.

## Getting Started

There are a few options for getting the Apache server configs:

* Download the [zip archive](https://github.com/h5bp/server-configs-apache/archive/3.0.0.zip)
* Install them via [npm](https://www.npmjs.com/):
  `npm install --save-dev apache-server-configs`

Inside the **dist/** folder, you'll find a ready-to-use **.htaccess** file.


## Usage

If you have access to the [main server configuration
file](https://httpd.apache.org/docs/current/configuring.html#main)
(usually called `httpd.conf`), you should add the logic from the pre-built
[`dist/.htaccess`](https://github.com/h5bp/server-configs-apache/blob/master/dist/.htaccess)
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
Apache modules enabled:

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

* <https://httpd.apache.org/docs/current/configuring.html>
* <https://httpd.apache.org/docs/current/howto/htaccess.html>

### Enable Apache httpd modules

#### Standalone

These instructions should work on any distribution where `apt-get` has been
used to install Apache.

1. Open up a terminal and type the following command. Enter your password when
   prompted.

    `sudo a2enmod setenvif headers deflate filter expires rewrite include`

2. Restart apache by using the following command so the new configuration takes
   effect.

    `sudo /etc/init.d/apache2 restart`

#### With MAMP/WAMP/XAMPP

* **MAMP PRO**. On the main screen, click the `Apache` tab and ensure that all
   the required modules are 'checked', indicating they are enabled.

* **WampServer**. If you have installed WampServer just click on the icon in the
   task bar then <kbd>Apache</kbd> section then <kbd>modules</kbd> section.
   You will be presented with a list of modules. Simply click on a module name
   to enable it. WampServer will automatically restart the Apache service after
   you enable a module.

* **Others**. Locate the `httpd.conf` file, which is typically found in:
  * **MAMP**: `/Applications/MAMP/conf/apache/httpd.conf`
  * **XAMPP**: `/Applications/XAMPP/etc/httpd.conf`
  * **WAMP**: `C:\apache\conf\httpd.conf`

  Open the file in a text editor and uncomment all of the required modules.
  Once you have done so, reset MAMP/WAMP/XAMPP.

## Custom .htaccess builds

Security, mime-type, and caching best practices evolve, and so should do your *.htaccess* file. In the past, with each new *Apache Server Configs* release it was quite tedious to find out which *.htaccess* trick was just new or only had changes in certain nuances.

The [**build script**](#build-script-buildsh) with its re-usable and customizable [**build configuration**](#configuration-file-htaccessconf) lets you easily update your *.htaccess* file. Each new *.htaccess* build will contain the updated *Apache Server Configs* source files, enabled or commented-out according to your settings in the *htaccess.conf* of your project root.

### Configuration file: *htaccess.conf*

Allows you to define which module to [enable](#enabling-modules) or [disable](#disabling-modules) for your project. Just copy the default [**htaccess.conf**](https://github.com/h5bp/server-configs-apache/blob/master/htaccess.conf) from this repo into your project directory. Adjust to your needs, and/or [add custom code](#adding-custom-modules) snippets you need for your project. Its syntax is straight and pretty much self-explanatory:

```
# Example Module

title   "example module"
enable  "src/example-module/images.conf"
enable  "src/example-module/web_fonts.conf"
disable "src/example-module/not-needed.conf"
omit    "src/example-module/not-needed-at-all.conf"

... more modules ...
```

#### Disabling modules

For example, the *“Cross-origin web fonts”* snippet is always included in our pre-built [*.htaccess*](https://github.com/h5bp/server-configs-apache/blob/master/dist/.htaccess) file and enabled. If your project does not deal with web fonts, you can **disable** or **omit** this section:

This will comment out the section:

```
disable  "src/cross-origin/web_fonts.conf"
```

…and this will exclude the section, saving lines in output:

```
omit  "src/cross-origin/web_fonts.conf"
```

#### Enabling modules

For example, the *“Forcing https://”* snippet is disabled by default, although being included in our pre-built [*.htaccess*](https://github.com/h5bp/server-configs-apache/blob/master/dist/.htaccess). To enable this snippet, change the **disable** keyword to **enable:**

```
enable "src/rewrites/rewrite_http_to_https.conf"
```

#### Adding custom modules

Imagine you're passing all requests to non-existing files to your favourite web framework. The according *mod_rewrite* snippet would go like this:

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.php [QSA,L]
```

Store this snippet in a file, e.g. **config/framework_rewrites.conf,** and add a reference in your **htaccess.conf:**

```
# PROJECT MODULES
enable "config/framework_rewrites.conf"
```

### Build script: *build.sh*

Dive into your project root and call the build script from wherever you cloned the repo. Here are three examples:

**1. Create a default .htaccess**  
in current work directory. An existing **htaccess.conf** in this directory will be used; if none is present, the [**default configuration**](https://github.com/h5bp/server-configs-apache/blob/master/htaccess.conf) will apply.


```bash
$ path/to/server-configs-apache/bin/build.sh

# Output looks like:
[✔] Build .htaccess
[✔] Moved in place: './.htaccess'
```

**2. Custom output location**  
Just add output path and filename as parameter. By the way, if there's an existing *.htaccess* file, the build script will create a backup.

```bash
$ path/to/server-configs-apache/bin/build.sh htdocs/.htaccess
[✔] Build .htaccess
[✔] Create backup: 'htdocs/.htaccess~'
[✔] Moved in place: 'htdocs/.htaccess'
```

**3. Custom .htaccess configuration**  
Why not maintain your personal **~/htaccess.conf?** This example creates a *.htaccess* in current work directory, according to your favourite settings you may have stored in your `$HOME` directory:

```bash
$ path/to/server-configs-apache/bin/build.sh ./.htaccess ~/htaccess.conf
```

## Support

* ### __Apache v2.4.0+__
* ### __Browsers:__
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
