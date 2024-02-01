# [Apache Server Configs](https://github.com/h5bp/server-configs-apache)

[![Server CI](https://github.com/h5bp/server-configs-apache/actions/workflows/server.yml/badge.svg)](https://github.com/h5bp/server-configs-apache/actions/workflows/server.yml)

**Apache Server Configs** is a collection of configuration snippets that can help
your server improve the website's performance and security, while also
ensuring that resources are served with the correct content-type and are
accessible, if needed, even cross-domain.


## Getting Started

There are two options for getting the Apache server configs:

* If you have access to the [main server configuration
  file](https://httpd.apache.org/docs/current/configuring.html#main)
  (usually called `httpd.conf`), you should configure Apache this way.
  This is usually the recommended way, as using `.htaccess` files [slows
  down](https://httpd.apache.org/docs/current/howto/htaccess.html#when)
  Apache!
* If you don't have access to it, which is quite common with hosting services,
  checkout the [`.htaccess` guide](#htaccess-file).

Using the Apache server configs repo directly has a few required steps to be able to work.

See also the [Apache Getting Started](https://httpd.apache.org/docs/current/getting-started.html).

### Check `httpd.conf` settings

The first thing to check is that the `httpd.conf` file contains appropriate values for
your specific install.

Most specific variables are:

* `ServerRoot`
* `User`
* `Group`
* `ErrorLog`
* `CustomLog`
* `TypesConfig` (ensure that the path for the `mime.types` file is valid)

### Apache test and restart

* To verify Apache config

  ```shell
  apache2 -t
  ```

* To verify Apache config with a custom file

  ```shell
  apache2 -t -f httpd.conf
  ```

* To reload Apache and apply the new config

  ```shell
  apache2ctl reload
  ```

### Enable Apache httpd modules

Some configurations won't have any effect if the
appropriate modules aren't enabled. So, in order for everything
to work as intended, you need to ensure you have the following
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

#### Standalone

These instructions should work on any distribution where `apt-get` has been
used to install Apache.

1. Open up a terminal and type the following command. Enter your password when
   prompted.

    ```shell
    sudo a2enmod setenvif headers deflate filter expires rewrite include
    ```

2. Restart apache by using the following command, so the new configuration takes
   effect.

    ```shell
    sudo /etc/init.d/apache2 restart
    ```

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

  Open the file in a text editor and uncomment all the required modules.
  Once you have done so, reset MAMP/WAMP/XAMPP.

### Basic structure

This repository has the following structure:

```text
./
├── vhosts/
│   ├── 000-default.conf
│   └── templates/
├── h5bp/
│   ├── basic.conf
│   └── .../
└── httpd.conf
```

* **`vhosts/`**

  This directory should contain all the server definitions.

  Except if they are dot prefixed or non `.conf` extension, all files in this
  folder **are** loaded automatically.

  * **`templates` folder**

    Files in this folder contain a `<VirtualHost/>` template for secure and non-secure hosts.
    They are intended to be copied in the `vhosts` folder with all `example.com`
    occurrences changed to the target host.

* **`h5bp/`**

  This directory contains config snippets (mixins) to be included as desired.

  There are two types of config files provided, individual config snippets and
  combined config files which provide convenient defaults.

  * **`basic.conf`**

    This file loads a small subset of the rules provided by this repository to add
    expires headers, allow cross-domain fonts and protect system files from web
    access.
    The `basic.conf` file includes the rules which are recommended to always be
    defined.

* **`httpd.conf`**

  The main Apache config file.


## Usage

The [default location of the configuration files](https://httpd.apache.org/docs/current/getting-started.html#configuration) is `/usr/local/apache2/`, but these files may be located any of a variety of places, depending on how exactly you installed the server.  
Common locations for these files may be found [in the httpd wiki](http://wiki.apache.org/httpd/DistrosDefaultLayout).

### As a reference

To use as reference requires no special installation steps, download/checkout the
repository to a convenient location and adapt your existing httpd configuration
incorporating the desired functionality from this repository.

Download the [latest release archive](https://github.com/h5bp/server-configs-apache/releases/latest).

### Directly

To use directly, add httpd config files from this repository.  
For example:

```shell
apache2ctl stop
git clone https://github.com/h5bp/server-configs-apache.git /tmp/h5bp-apache
cd /usr/local
cp -r apache2 apache2-previous
cp -r /tmp/h5bp-apache/* apache2
# install-specific edits
apache2ctl start
```

### Manage sites

```bash
cd /usr/local/apache2/vhosts
```

* Creating a new site

  ```bash
  cp templates/example.com.conf .actual-hostname.conf
  sed -i 's/example.com/actual-hostname/g' .actual-hostname.conf
  ```

* Enabling a site

  ```bash
  mv .actual-hostname.conf actual-hostname.conf
  ```

* Disabling a site

  ```bash
  mv actual-hostname.conf .actual-hostname.conf
  ```

```bash
apache2ctl reload
```


## `.htaccess` file

### Usage

Just copy the `.htaccess` file in the root of the website.

Getting options:

* Download the `h5bp.htaccess` on the [latest release](https://github.com/h5bp/server-configs-apache/releases/latest)
  and rename the file to `.htaccess`
* Install them via [npm](https://www.npmjs.com/): `npm install --save-dev apache-server-configs`
  Inside the `dist/` folder, you'll find a ready-to-use `.htaccess` file.

### Custom `.htaccess` builds

Security, mime-type, and caching best practices evolve, and so should do your
`.htaccess` file. In the past, with each new *Apache Server Configs* release
it was quite tedious to find out which `.htaccess` trick was just new or only
had changes in certain nuances.

The [**build script**](#build-script-buildsh) with its re-usable and customizable
[**build configuration**](#configuration-file-htaccessconf) lets you easily
update your `.htaccess` file. Each new `.htaccess` build will contain the
updated *Apache Server Configs* source files, enabled or commented-out according
to your settings in the `htaccess.conf` of your project root.

#### Configuration file: `htaccess.conf`

It allows you to define which module to [enable](#enabling-modules) or
[disable](#disabling-modules) for your project. Just copy the default
[`htaccess.conf`](https://github.com/h5bp/server-configs-apache/blob/main/bin/htaccess.conf)
from this repo into your project directory. Adjust to your needs, and/or
[add custom code](#adding-custom-modules) snippets you need for your project.
Its syntax is straight and pretty much self-explanatory:

```apache
# Example Module

title   "example module"
enable  "src/example-module/images.conf"
enable  "src/example-module/web_fonts.conf"
disable "src/example-module/not-needed.conf"
omit    "src/example-module/not-needed-at-all.conf"

#... more modules ...
```

##### Disabling modules

For example, the *“Cross-origin web fonts”* snippet is always included in
our pre-built `.htaccess` file and enabled. If your project does not deal
with web fonts, you can `disable` or `omit` this section:

This will comment out the section:

```apache
disable  "h5bp/cross-origin/web_fonts.conf"
```

…and this will exclude the section, saving lines in output:

```apache
omit  "h5bp/cross-origin/web_fonts.conf"
```

##### Enabling modules

For example, the *“Forcing `https://`”* snippet is disabled by default,
although being included in our pre-built `.htaccess`. To enable this
snippet, change the `disable` keyword to `enable`:

```apache
enable "h5bp/rewrites/rewrite_http_to_https.conf"
```

##### Controlling the size of the output .htaccess file

The default partials contain significant numbers of comment lines, which
contain valuable guidance about how and why to use the setting as well
as web references. However, some may feel that the size of the resulting
`.htaccess` file is too large.

The special keyword `no-partials-comments` can be used to prevent
comment lines from being copied out of the partials into `.htaccess`.

> [!Note]
> This keyword does not control comments created by the build
> script (such as `title` or `disabled` directives), only those that
> are in the source partials files.

```apache
no-partials-comments
```

##### Adding custom modules

Imagine you're passing all requests to non-existing files to your
favorite web framework. The according
[_mod_dir_](https://httpd.apache.org/docs/trunk/mod/mod_dir.html#fallbackresource)
snippet would go like this:

```apache
FallbackResource index.php
```

Store this snippet in a file, e.g. `config/framework_rewrites.conf`, and add
a reference in your `htaccess.conf`:

```apache
# PROJECT MODULES
enable "config/framework_rewrites.conf"
```

#### Build script: `build.sh`

Dive into your project root and call the build script from wherever you cloned
the repo. Here are three examples:

1. Create a default `.htaccess`

Create a default `.htaccess` in the current work directory. An existing
`htaccess.conf` in this directory will be used; if none is present, the
[**default configuration**](https://github.com/h5bp/server-configs-apache/blob/main/bin/htaccess.conf)
will apply.


```console
$ path/to/server-configs-apache/bin/build.sh

# Output looks like:
[✔] Build .htaccess
[✔] Moved in place: './.htaccess'
```

2. Custom output location

Just add an output path and filename as a parameter. By the way, if there's an
existing `.htaccess` file, the build script will create a backup.

```console
$ path/to/server-configs-apache/bin/build.sh htdocs/.htaccess
[✔] Build .htaccess
[✔] Create backup: 'htdocs/.htaccess~'
[✔] Moved in place: 'htdocs/.htaccess'
```

3. Custom `.htaccess` configuration

Why not maintain your personal `~/htaccess.conf`? This example creates a
`.htaccess` in the current work directory, according to your favorite settings
you may have stored in your `$HOME` directory:

```bash
path/to/server-configs-apache/bin/build.sh ./.htaccess ~/htaccess.conf
```


## Support

* Apache v**2.4.17**+


## Contributing

Anyone is welcome to [contribute](.github/CONTRIBUTING.md),
however, if you decide to get involved, please take a moment to review
the [guidelines](.github/CONTRIBUTING.md):

* [Bug reports](.github/CONTRIBUTING.md#bugs)
* [Feature requests](.github/CONTRIBUTING.md#features)
* [Pull requests](.github/CONTRIBUTING.md#pull-requests)


## Acknowledgements

[Apache Server Configs](https://github.com/h5bp/server-configs-apache/) is
only possible thanks to all the awesome
[contributors](https://github.com/h5bp/server-configs-apache/graphs/contributors)!


## License

The code is available under the [MIT license](LICENSE.txt).
