### 2.11.0 (October 27, 2014)

* Add configs for common media types used for `.woff` files
  [[e602ae9](https://github.com/h5bp/server-configs-apache/commit/e602ae9e62412d95fba377abfb66ef2f773cfc4d)].
* Add configs for files marked as `text/x-cross-domain-policy`
  [[a0c4e17](https://github.com/h5bp/server-configs-apache/commit/a0c4e1719075bf1d97d92a3b0ad225c7bff5dfab)].
* Add configs for files marked as `image/vnd.microsoft.icon`
  [[0ba37cb](https://github.com/h5bp/server-configs-apache/commit/0ba37cb77de29b29e44145046a936483aeb1bfc5)].
* Add configs for files marked as `font/eot`
  [[6dae5d4](https://github.com/h5bp/server-configs-apache/commit/6dae5d4e063db5d70a3a7abecadb97707b6fdf2c)].

### 2.10.0 (October 20, 2014)

* Add `bower.json` and publish on `Bower`
  [[3425f72](https://github.com/h5bp/server-configs-apache/commit/3425f72c626cc70fabcf8fbac76565063249a518)].
* Improve inline comments.
* Add configs for files marked as `application/x-javascript`
  [[23793d8](https://github.com/h5bp/server-configs-apache/commit/23793d85f3c13a5f239538156021748c98b40183)].
* Add configs for bitmap image files (`.bmp`)
  [[77ccf9e](https://github.com/h5bp/server-configs-apache/commit/77ccf9ec101b20c14a05fdfb50c2db47ed490ad4)].
* Compress vCard files (`.vcard`/`.vcf`).
  [[a076635](https://github.com/h5bp/server-configs-apache/commit/a0766359454887192914dcd5f042bce281b2170d)].
* Serve vCard files (`.vcard`/`.vcf`) with the `text/vcard` media type
  [[104f232](https://github.com/h5bp/server-configs-apache/commit/104f232dad100ddd5c8cf0c354c2bcd163a6b915)].
* Add configs for BlackBerry Maps location documents (`.xloc`)
  [[20000d1](https://github.com/h5bp/server-configs-apache/commit/20000d1741701eede2e0903b2b86992d8b70c35a)].
* Add configs for BlackBerry App World files (`.bbaw`)
  [[352fb62](https://github.com/h5bp/server-configs-apache/commit/352fb62daae4b57cf605c1eb3a836385f6f7e01f)].

### 2.9.0 (October 15, 2014)

* Update example regarding forcing `https://`
  [[060b70c](https://github.com/h5bp/server-configs-apache/commit/060b70c1428f5a2b3cc4e42ac66c1b7d75ae3bc9)].

### 2.8.0 (September 13, 2014)

* Improve configs for `.rdf` files
  [[742d148](https://github.com/h5bp/server-configs-apache/commit/742d148ca497ef07a31d3bd648af29c129f4b62c)].
* Add example on how to allow cross-origin access to the resource's
  timing information
  [[3df6768](https://github.com/h5bp/server-configs-apache/commit/3df6768e786b7595a656da1675b10c87e7ce18b9)].
* Add configs for files marked as `text/javascript`
  [[db69327](https://github.com/h5bp/server-configs-apache/commit/db6932740a90a36cbbf8b38627fc034d595471c0)].
* Add configs for JSON Schema files (`.json`)
  [[#39](https://github.com/h5bp/server-configs-apache/issues/39)].

### 2.7.1 (August 3, 2014)

* Update `package.json` and publish on `npm`
  [[#33](https://github.com/h5bp/server-configs-apache/issues/33)].

### 2.7.0 (July 28, 2014)

* Add configs for TopoJSON files (`.topojson`)
  [[#34](https://github.com/h5bp/server-configs-apache/issues/34)].

### 2.6.0 (July 3, 2014)

* Add configs for WOFF 2.0 font files (`.woff2`)
  [[#32](https://github.com/h5bp/server-configs-apache/issues/32)].
* Add configs for GeoJSON files (`.geojson`)
  [[16d3965](https://github.com/h5bp/server-configs-apache/commit/16d39657164a397c8584843296fa04dc297c4b55)].

### 2.5.0 (June 14, 2014)

* Compress cache manifest files (`.appcache`/`.manifest`)
  [[d819fec](https://github.com/h5bp/server-configs-apache/commit/d819fecd81e1d23fb5f153995f573890b037a82c)].
* Move all compression related configs under the `Compression` section
  [[73a107e](https://github.com/h5bp/server-configs-apache/commit/73a107ed0cb9ae4b3ec966e8e246b7a6f4bbd059)].

### 2.4.1 (June 7, 2014)

* Improve and update inline comments.

### 2.4.0 (June 3, 2014)

* Add configs for web application manifest files
  [[#29](https://github.com/h5bp/server-configs-apache/issues/29)].
* Allow access to the content from within the `/.well-known/` directory
  [[#31](https://github.com/h5bp/server-configs-apache/issues/31)].
* Forbid access to `.conf` files.
* Add the `no-transform` value to the `Cache-Control` HTTP response
  header without overwriting existing values.
* Add `cur`, `ico`, `svg`, `svgz` and `webp` to the filename-based
  cache busting list.
* Add configs for text files (`.txt`)
  [[b5bda65](https://github.com/h5bp/server-configs-apache/commit/b5bda651d2811f8f3c1f061ee97d0404ebfe8468)].
* Compress WebVTT files (`.vtt`)
  [[0bb12c8](https://github.com/h5bp/server-configs-apache/commit/0bb12c832be9865bcfdaa1042b64381e7d723560)].
* Reintroduce the `filename extension` to `content type` mappings for `ico`
  and `svg` [[#28](https://github.com/h5bp/server-configs-apache/issues/28)].

### 2.3.0 (April 10, 2014)

* Send `X-Content-Type-Options` header by default
  [[edd912d](https://github.com/h5bp/server-configs-apache/commit/edd912d9f76602c9d29ae087ff4e176632a0f656)].

### 2.2.0 (February 3, 2014)

* Remove example regarding `persistent connections`
  [[#20](https://github.com/h5bp/server-configs-apache/issues/20)].
* Improve the `<FilesMatch>` regular expressions.
* Add configs for JSON-LD (JSON for Linking Data) files
  [[#17](https://github.com/h5bp/server-configs-apache/issues/17)].

### 2.1.0 (December 31, 2013)

* Serve source map files with the `application/json` content-type
  [[7d114e8](https://github.com/h5bp/server-configs-apache/commit/7d114e8eeacadaf30768d60f7f522b3558e83676)].
* Make `RewriteCond`s for `example.com → www.example.com` more permissive
  [[#11](https://github.com/h5bp/server-configs-apache/issues/11)].
* Add configs for Ogg Opus audio files
  [[#13](https://github.com/h5bp/server-configs-apache/issues/13)].

### 2.0.0 (November 12, 2013)

* Add example on how to mitigate reflected (a.k.a non-persistent) XSS attacks
  [[#8](https://github.com/h5bp/server-configs-apache/issues/8)].
* Add example on how to provide clickjacking protection
  [[#8](https://github.com/h5bp/server-configs-apache/issues/8)].
* Add example on how to reduce MIME type security risks
  [[#8](https://github.com/h5bp/server-configs-apache/issues/8)].
* Add configs for cursor images (`.cur`)
  [[a795fff](https://github.com/h5bp/server-configs-apache/commit/a795fff87871c020cf29bb60f208b7afe2bb5b3a)].
* Fix backup and source file blocking for Apache v2.3+
  [[#5](https://github.com/h5bp/server-configs-apache/issues/5)].
* Remove filename extension to content type mappings that are already provided
  by Apache v2.2.0+
  [[#4](https://github.com/h5bp/server-configs-apache/issues/4)].
* Improve inline comments.
* Remove `screen flicker` fix required by IE 6
  [[#3](https://github.com/h5bp/server-configs-apache/issues/3)].

### 1.1.0 (July 27, 2013)

* Remove Chrome Frame HTTP header hint.

### 1.0.0 (July 27, 2013)
