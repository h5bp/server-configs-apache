### 5.0.0 (July 31, 2021)

* ⚠️ **Breaking**: End of support for Internet Explorer (`X-UA-Compatible` and `X-XSS-Protection` headers)
  [[d1fb502](https://github.com/h5bp/server-configs-apache/commit/d1fb50202c36f01e4f2d4b43356eb816ffa9e222)]  
  [[22014cb](https://github.com/h5bp/server-configs-apache/commit/22014cba3dea2b23f8b49593a2d8e44a99b97da9)]
* 🎉 Security first! Modernize TLS configuration
  [[55c364d](https://github.com/h5bp/server-configs-apache/commit/55c364d185db0b25016e88d20c3e6181c2c22940)]
* 🎉 Security first! Refresh policies-related headers usage
  * Add Cross Origin Policies headers (COOP/COEP/CORP)
    [[9d2cb74](https://github.com/h5bp/server-configs-apache/commit/9d2cb7496b40d03c03b817b53b19c6282d5eff2d)]
  * Add `Permissions-Policy` header
    [[86494cc](https://github.com/h5bp/server-configs-apache/commit/86494cc034f459aeb96648944b1f195a05d232ff)]
  * Make `Content-Security-Policy` disallow 'object-src' by default
    [[f993710](https://github.com/h5bp/server-configs-apache/commit/f9937105c83ab07a6f19890413cebb8e4a70d08c)]
* Add mime-type `image/jxl`
  [[da3ce54](https://github.com/h5bp/server-configs-apache/commit/da3ce54293b96b6ae977a6c0f06df4a58ecbfec0)]
* Fix `SSLSessionCache` directive usage
  [[64e33e8](https://github.com/h5bp/server-configs-apache/commit/64e33e89509c9ee8f806fb860efc78dc7563fe6c)]
* Improve inline comments.

### 4.1.0 (January 5, 2021)

* Add mime-type `image/avif` and `image/avifs`
  [[4ca46af](https://github.com/h5bp/server-configs-apache/commit/4ca46af2dc9791699221ea9e274d46ffe275b061)]
* Fix unexpected Content-Language in pre-compressed Brotli
  [[1f5641d](https://github.com/h5bp/server-configs-apache/commit/1f5641d702b05b92c15a60a7c98d5090f03789dd)]
* Added `systemd` module to support CentOS
  [[5d060b0](https://github.com/h5bp/server-configs-apache/commit/5d060b0f562dbde5f3f15cc2a250f9d2bc10fb84)]
* Improve inline comments.

### 4.0.0 (April 14, 2020)

* 🎉 Server-level config! Support httpd configuration at main server level.
  Add `httpd.conf` file, vhost management, secure HTTP tweaking, etc. See the [README](https://github.com/h5bp/server-configs-apache)
  [[b50205a...c302596](https://github.com/h5bp/server-configs-apache/compare/df7857d...c302596)]
* ⚠️ **Breaking**: End of support for Apache httpd version 2.4.9 and below
  [[baa9cdd](https://github.com/h5bp/server-configs-apache/commit/baa9cdd5567b25d9434b06937a436ceccadb6b4c)]
* ⚠️ **Breaking**: File paths changes for the `.htaccess` build system
  [[478ceab](https://github.com/h5bp/server-configs-apache/commit/478ceab3a28786856a1ffcdf6a943ee43907caf0)]
  [[9cb2763](https://github.com/h5bp/server-configs-apache/commit/9cb2763d7f5e3fce984bfdea903e9df61cdf4bcd)]
* Rewrite, improve and update a large part of the documentation
  [[5dc823c](https://github.com/h5bp/server-configs-apache/commit/5dc823c18e4a0ee163c2ee3b772060bce7d782e6)]
  [[5748d26](https://github.com/h5bp/server-configs-apache/commit/5748d26258394005b4d6dbb2f8474b58ed276e95)]
  [[d8553ee](https://github.com/h5bp/server-configs-apache/commit/d8553ee58f307419d9ec39ab8c60fc6a6e1135cb)]
  [[6862ac1](https://github.com/h5bp/server-configs-apache/commit/6862ac17ed60042c4eb47b56c8da055e99ad4dac)]
  [[ade3659](https://github.com/h5bp/server-configs-apache/commit/ade3659f49b5e23c93695b6888f92bfda3b3f2ed)]
* Default to HSTS only over secure connections
  [[5bbc0a1](https://github.com/h5bp/server-configs-apache/commit/5bbc0a1ded8b306ca900338136a50d17eb304b94)]
* Stricter default for Referrer Policy `strict-origin-when-cross-origin`
  [[43bcb83](https://github.com/h5bp/server-configs-apache/commit/43bcb833eb0539800e0d3e8a19ad3ef1d6944592)]
* Add APNG (`.apng`) MIME type
  [[ad25d31](https://github.com/h5bp/server-configs-apache/commit/ad25d3185fb28971a83e8c721567d7ce08b76f38)]
* Ensure the presence of security headings where expected
  [[d656422](https://github.com/h5bp/server-configs-apache/commit/d65642225cf080c15ace94816bed9f15080471b1)]
  [[43bcb83](https://github.com/h5bp/server-configs-apache/commit/43bcb833eb0539800e0d3e8a19ad3ef1d6944592)]
  [[d84d94c](https://github.com/h5bp/server-configs-apache/commit/d84d94c7e1e3e647a6ff3b0d29a780481a0638d8)]
* Make disabling TRACE method usable in a `.htaccess` file
  [[9ae931c](https://github.com/h5bp/server-configs-apache/commit/9ae931cfe5bc4fe8af0fca21094ad93d4437cfaa)]
* Improve inline comments.

### 3.2.1 (May 8, 2019)

* Fix npm releasing
  [[4b0ee86](https://github.com/h5bp/server-configs-apache/commit/4b0ee8643c2c4f7dafafca82be67dc3309c0b479)]

### 3.2.0 (May 6, 2019)

* Enhance CSP policy
  [[f48934b](https://github.com/h5bp/server-configs-apache/commit/f48934b6a1fe0f7de356f57911844bc006bdd9ec)]
* Common headers addition based on MIME-types instead of file extensions
  [[a880772...64cb33d](https://github.com/h5bp/server-configs-apache/compare/012cb6d...64cb33d)]
* Always unset `X-Powered-By` header
  [[1470258](https://github.com/h5bp/server-configs-apache/commit/14702588b130451f45cb2c1ae18a42fe70e4a922)]
* Support hashed asset names in cache-busting
  [[33f8006](https://github.com/h5bp/server-configs-apache/commit/33f800642a65b6f209243d3c2e266b82dbf7982f)]
* Switch `application/vnd.geo+json` to `application/geo+json`
  [[35cbd63](https://github.com/h5bp/server-configs-apache/commit/35cbd63662c491b8025e35cc6362dbfba5aeae82)]
* New test system using [server-configs-test](https://github.com/h5bp/server-configs-test)
  [[3ae257c](https://github.com/h5bp/server-configs-apache/commit/3ae257ce57e9458c3a335fe65ff61498d1b0eb45)]
* Improve inline comments.

### 3.1.0 (February 8, 2019)

* Remove P3P iframe cookies directives
  [[ccce7b8](https://github.com/h5bp/server-configs-apache/commit/ccce7b85ab9f2c81c7aa66f94c31e2accfc7b22d)]
* Add `TraceEnable Off` directive
  [[0a2f70e](https://github.com/h5bp/server-configs-apache/commit/0a2f70e5270f96d08ab94bb5f7a9091bcdc03909)]
* Support hashed asset names in cache-busting
  [[33f8006](https://github.com/h5bp/server-configs-apache/commit/33f800642a65b6f209243d3c2e266b82dbf7982f)]
* Allow SSL certificate set up over HTTP
  [[54b6176..993127d](https://github.com/h5bp/server-configs-apache/compare/9481d53..993127d)]
* Rename cache expiration rules file to `cache_expiration.conf` to make it more generic
  [[11690c6](https://github.com/h5bp/server-configs-apache/commit/11690c60880682973854e17117bd5c3f17cd175a)]
* Improve inline comments.

### 3.0.0 (April 16, 2018)

* ⚠️ **Breaking**: End of support for Apache httpd version 2.3 and below
  [[7d296c3](https://github.com/h5bp/server-configs-apache/commit/7d296c35c7337ca183bd31326e10e15d54ca187b)]
* 🎉 New build system! Configurable build and customizable generation. See the [README](https://github.com/h5bp/server-configs-apache#custom-htaccess-builds)
  [[5896349](https://github.com/h5bp/server-configs-apache/commit/589634974291a4a9ee1fd2a99c23794036e9aace)]
* Add Referrer-Policy header template
  [[591083e](https://github.com/h5bp/server-configs-apache/commit/591083eedc654837c051ca1aff4282444dc06471)]
* Switch back `.js`-files and `.mjs`-files media-type to `text/javascript`
  [[690f4ad](https://github.com/h5bp/server-configs-apache/commit/690f4ad6add3a3c2185641474e05378000a19d84)]
* Add pre-compressed content handling template
  [[52639ab](https://github.com/h5bp/server-configs-apache/commit/52639ab1fa97d666f3b262e04f70ab3ce020d0d0)]
* Add WebAssembly module (`.wasm`) MIME type
  [[a2e7d7b](https://github.com/h5bp/server-configs-apache/commit/a2e7d7b38cf96b804a7323362ee72950e51810f5)]
* Improve inline comments.

### 2.15.0 (October 8, 2017)

* Serve `.md` and `.markdown` files as `text/markdown`
  [[bfcafd3](https://github.com/h5bp/server-configs-apache/commit/bfcafd36b42f8118306ce3f9c17d6463692b4be0)].
* Add font MIME types per RFC 8081
  [[20b446e](https://github.com/h5bp/server-configs-apache/commit/20b446e2ad6e1eec68b50277a894876e41395403)].
* Mark `.mjs` files as JavaScript
  [[c00975c](https://github.com/h5bp/server-configs-apache/commit/c00975c74bde80175684314c883c09ab04b5bccc)].
* Add calendar filetype (`.ics`)
  [[002a110](https://github.com/h5bp/server-configs-apache/commit/002a110bf35c25af66ab09ef1bd724ece5fd8266)].
* Block Mercurial `.orig` files
  [[4c13648](https://github.com/h5bp/server-configs-apache/commit/4c1364885477e836fec24a6d8330cba69cf3d3a0)].
* Fix enforcing www/no-www with HTTPS
  [[fc747bb](https://github.com/h5bp/server-configs-apache/commit/fc747bbdf0a0c224ec08d8b925f33671e4d5046d)].
* Drop Bower support
  [[ee6cd75](https://github.com/h5bp/server-configs-apache/commit/ee6cd751f0b907239a032ec5477ee3bfbc2bc570)].
* Fix HTTPS enforcement rule
  [[11e523d](https://github.com/h5bp/server-configs-apache/commit/11e523d10ad8bb604fe692ec8d1fd40adc0010fa)].
* Improve inline comments.

### 2.14.0 (April 4, 2015)

* Update the web app manifest file related configs
  [[e603554](https://github.com/h5bp/server-configs-apache/commit/e603554f559b1be4861553239e22a7844075bedc)].

### 2.13.0 (March 4, 2015)

* Remove the mapping of `.manifest` files to the `text/cache-manifest` media type
  [[c805353](https://github.com/h5bp/server-configs-apache/commit/c805353c4142c792267945687309259fc15b2106)].
* Remove the mapping of `.php` files to the `text/html` media type
  [[daab35b](https://github.com/h5bp/server-configs-apache/commit/daab35bc91c299da23efdfa740f13a46ad10612a)].

### 2.12.0 (March 2, 2015)

* Add `ServerSignature Off`
  [[#58](https://github.com/h5bp/server-configs-apache/issues/58)].
* Change media types for `.atom` and `.rss` files
  [[#50](https://github.com/h5bp/server-configs-apache/issues/50)].
* Send the HSTS header even for non-2xx responses
  [[#57](https://github.com/h5bp/server-configs-apache/issues/57)].
* Add configs that remove the `X-Powered-By` HTTP response header
  [[#54](https://github.com/h5bp/server-configs-apache/issues/54)].
* Add expires rules for WebP
  [[#61](https://github.com/h5bp/server-configs-apache/issues/61)].

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
