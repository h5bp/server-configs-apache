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

* Compress cache manifest files (`.appcache` / `.manifest`)
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
