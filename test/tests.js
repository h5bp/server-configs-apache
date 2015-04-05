exports = module.exports = {

    // Global default values

    'defaultRequestHeaders': {
        'accept-encoding': 'gzip, deflate, sdch'
    },

    'defaultResponseHeaders': {
        'access-control-allow-origin': null,
        'cache-control': 'max-age=2592000, no-transform',
        'content-encoding': 'gzip',
        'content-security-policy': null,
        'etag': null,
        'p3p': 'policyref="/w3c/p3p.xml", CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"',
        'server': 'Apache',
        'x-powered-by': null,
        'x-content-type-options': 'nosniff',
        'x-frame-options': null,
        'x-ua-compatible': null,
        'x-xss-protection': null
    },

    'defaultStatusCode': 200,

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // Global tests

    'tests': [

        /*

        Example test:

        {
            description: '<test_description>'
            files: {

                '<file>': {

                    // The HTTP headers that will be sent when the request
                    // is made (these values will overwrite the default ones)
                    requestHeaders: {
                        '<header>': '<header_value>',
                        ...
                    } || null,
                          └─ indicates that no special request headers need to
                             be sent (in this case the default values are ignored)

                    // The expected HTTP response body data
                    responseBody: '<content>',

                    // The expected HTTP response headers
                    // (these values will overwrite the default ones)
                    responseHeaders: {
                        // custom values
                        '<response_header>': '<header_value>' || null,
                                                                  └─ indicates that the HTTP response
                                                                     header should NOT be present
                        ...
                    } || null,
                          └─ indicates that no special response headers need to
                             be tested (in this case the default values are ignored)

                    // The expected HTTP response status code
                    // (this value will overwrite the default one)
                    statusCode: <statusCode>

                },

                ...
            }
        }

        */

        {
            description: 'Test if files are served with the correct HTTP response response headers',
            files: {

                'test.appcache': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'text/cache-manifest'
                    }
                },

                'test.atom': {
                    responseHeaders: {
                        'cache-control': 'max-age=3600, no-transform',
                        'content-type': 'application/atom+xml; charset=utf-8'
                    }
                },

                'test.bbaw': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'application/x-bb-appworld; charset=utf-8'
                    }
                },

                'test.bmp': {
                    requestHeaders: {
                        'origin': 'http://'
                    },
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-type': 'image/bmp'
                    }
                },

                'test.crx': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'application/x-chrome-extension'
                    }
                },

                'test.css': {
                    responseHeaders: {
                        'cache-control': 'max-age=31536000, no-transform',
                        'content-type': 'text/css; charset=utf-8'
                    }
                },

                'test.cur': {
                    requestHeaders: {
                        'origin': 'http://'
                    },
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'cache-control': 'max-age=604800, no-transform',
                        'content-type': 'image/x-icon'
                    },
                },

                'test.eot': {
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-type': 'application/vnd.ms-fontobject'
                    }
                },

                'test.f4a': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'audio/mp4'
                    }
                },

                'test.f4b': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'audio/mp4'
                    }
                },

                'test.f4p': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'video/mp4'
                    }
                },

                'test.f4v': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'video/mp4'
                    }
                },

                'test.flv': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'video/x-flv'
                    }
                },

                'test.geojson': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'application/vnd.geo+json; charset=utf-8'
                    }
                },

                'test.gif': {
                    requestHeaders: {
                        'origin': 'http://'
                    },
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-encoding': null,
                        'content-type': 'image/gif'
                    }
                },

                'test.htc': {
                    responseHeaders: {
                        'content-type': 'text/x-component'
                    }
                },

                'test.html': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-security-policy': "script-src 'self'; object-src 'self'",
                        'content-type': 'text/html; charset=utf-8',
                        'x-frame-options': 'DENY',
                        'x-ua-compatible': 'IE=edge',
                        'x-xss-protection': '1; mode=block'
                    }
                },

                'test.ico': {
                    requestHeaders: {
                        'origin': 'http://'
                    },
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'cache-control': 'max-age=604800, no-transform',
                        'content-type': 'image/x-icon'
                    }
                },

                'test.jpeg': {
                    requestHeaders: {
                        'origin': 'http://'
                    },
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-encoding': null,
                        'content-type': 'image/jpeg'
                    }
                },

                'test.jpg': {
                    requestHeaders: {
                        'origin': 'http://'
                    },
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-encoding': null,
                        'content-type': 'image/jpeg'
                    }
                },

                'test.js': {
                    responseHeaders: {
                        'cache-control': 'max-age=31536000, no-transform',
                        'content-type': 'application/javascript; charset=utf-8'
                    }
                },

                'test.json': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'application/json; charset=utf-8'
                    }
                },

                'test-schema.json': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'application/schema+json; charset=utf-8'
                    }
                },

                'test.jsonld': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'application/ld+json; charset=utf-8'
                    }
                },

                'test.m4a': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'audio/mp4'
                    }
                },

                'test.m4v': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'video/mp4'
                    }
                },

                'test.map': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'application/json'
                    }
                },

                'test.mp4': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'video/mp4'
                    }
                },

                'test.oex': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'application/x-opera-extension'
                    }
                },

                'test.oga': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'audio/ogg'
                    }
                },

                'test.ogg': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'audio/ogg'
                    }
                },

                'test.ogv': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'video/ogg'
                    }
                },

                'test.opus': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'audio/ogg'
                    }
                },

                'test.otf': {
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-type': 'font/opentype'
                    }
                },

                'test.pdf': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'application/pdf'
                    }
                },

                'test.png': {
                    requestHeaders: {
                        'origin': 'http://'
                    },
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-encoding': null,
                        'content-type': 'image/png'
                    }
                },

                'test.rdf': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'application/xml; charset=utf-8'
                    }
                },

                'test.rss': {
                    responseHeaders: {
                        'cache-control': 'max-age=3600, no-transform',
                        'content-type': 'application/rss+xml; charset=utf-8'
                    }
                },

                'test.safariextz': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'application/octet-stream'
                    }
                },

                'test.svg': {
                    requestHeaders: {
                        'origin': 'http://'
                    },
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-type': 'image/svg+xml'
                    }
                },

                'test.svgz': {
                    requestHeaders: {
                        // the 'accept-encoding' HTTP header is not necessary in this case
                        'origin': 'http://'
                    },
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-type': 'image/svg+xml'
                    }
                },

                'test.swf': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'application/x-shockwave-flash'
                    }
                },

                'test.topojson': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'application/json; charset=utf-8'
                    }
                },

                'test.ttc': {
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-type': 'application/x-font-ttf'
                    }
                },

                'test.ttf': {
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-type': 'application/x-font-ttf'
                    }
                },

                'test.txt': {
                    responseHeaders: {
                        'content-type': 'text/plain; charset=utf-8'
                    }
                },

                'test.vcard': {
                    responseHeaders: {
                        'content-type': 'text/vcard'
                    }
                },

                'test.vcf': {
                    responseHeaders: {
                        'content-type': 'text/vcard'
                    }
                },

                'test.vtt': {
                    responseHeaders: {
                        'content-type': 'text/vtt; charset=utf-8'
                    }
                },

                'test.webapp': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'application/x-web-app-manifest+json; charset=utf-8'
                    }
                },

                'test.webm': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'video/webm'
                    }
                },

                'test.webmanifest': {
                    responseHeaders: {
                        'cache-control': 'max-age=604800, no-transform',
                        'content-type': 'application/manifest+json; charset=utf-8'
                    }
                },

                'test.webp': {
                    requestHeaders: {
                        'origin': 'http://'
                    },
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'cache-control': 'max-age=2592000, no-transform',
                        'content-encoding': null,
                        'content-type': 'image/webp'
                    }
                },

                'test.woff': {
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-encoding': null,
                        'content-type': 'application/font-woff'
                    }
                },

                'test.woff2': {
                    responseHeaders: {
                        'access-control-allow-origin': '*',
                        'content-encoding': null,
                        'content-type': 'application/font-woff2'
                    }
                },

                'test.xloc': {
                    responseHeaders: {
                        'content-type': 'text/vnd.rim.location.xloc; charset=utf-8'
                    }
                },

                'test.xml': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'application/xml; charset=utf-8'
                    }
                },

                'test.xpi': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'application/x-xpinstall'
                    }
                }

            }
        },

        {
            description: 'Test if the server has the `MultiViews` option disabled (does NOT pattern match based on filenames)',
            files: {

                // `Apache/multiviews/foo` does NOT exist, but if the
                // `MultiViews` option is enabled, the server will
                // return the responseBody of `Apache/multiviews/foo.html`

                'apache/multiviews/foo': {
                    requestHeaders: null,
                    responseBody:
                        '<!doctype html>\n' +
                        '<html lang="en">\n' +
                        '<head>\n' +
                        '    <meta charset="utf-8">\n'+
                        '    <title>404</title>\n' +
                        '</head>\n' +
                        '<body>\n' +
                        '    404\n' +
                        '</body>\n' +
                        '</html>\n',
                    responseHeaders: null,
                    statusCode: 404
                }

            }
        },

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        {
            description: 'Test if the custom 404 page is returned to the client in case of an 404 error',
            files: {

                'this/does/not.exist': {
                    requestHeaders: null,
                    responseBody:
                        '<!doctype html>\n' +
                        '<html lang="en">\n' +
                        '<head>\n' +
                        '    <meta charset="utf-8">\n' +
                        '    <title>404</title>\n' +
                        '</head>\n' +
                        '<body>\n' +
                        '    404\n' +
                        '</body>\n' +
                        '</html>\n',
                    responseHeaders: null,
                    statusCode: 404
                }

            }
        },

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        {
            description: 'Test if access is forbidden to directories without a default document',
            files: {

                'test/': {
                    responseHeaders: null,
                    statusCode: 403
                }

            }
        },

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        {
            description: 'Test if access is forbidden to hidden files and directories with the exception of the visible content from within the `/.well-known/` hidden directory',
            files: {

                '.hidden_file': {
                    responseHeaders: null,
                    statusCode: 403
                },

                '.hidden_directory/': {
                    responseHeaders: null,
                    statusCode: 403
                },

                '.well-known/': {
                    responseHeaders: null,
                    statusCode: 403
                },

                '.well-known/.hidden_directory/': {
                    responseHeaders: null,
                    statusCode: 403
                },

                '.well-known/.hidden_directory/test.html': {
                    responseHeaders: null,
                    statusCode: 403
                },

                '.well-known/test.html': {
                    requestHeaders: null,
                    responseBody:
                        '<!doctype html>\n' +
                        '<html lang="en">\n' +
                        '<head>\n' +
                        '    <meta charset="utf-8">\n' +
                        '    <title>test</title>\n' +
                        '</head>\n' +
                        '<body>\n' +
                        '    test\n' +
                        '</body>\n' +
                        '</html>\n',
                    responseHeaders: null
                },

                '.well-known/test/': {
                    responseHeaders: null,
                    statusCode: 403
                },

                '.well-known/test/test.html': {
                    requestHeaders: null,
                    responseBody:
                        '<!doctype html>\n' +
                        '<html lang="en">\n' +
                        '<head>\n' +
                        '    <meta charset="utf-8">\n' +
                        '    <title>test</title>\n' +
                        '</head>\n' +
                        '<body>\n' +
                        '    test\n' +
                        '</body>\n' +
                        '</html>\n',
                    responseHeaders: null
                },

                '.well-known/test/.hidden_directory/': {
                    responseHeaders: null,
                    statusCode: 403
                },

                '.well-known/test/.hidden_directory/test.html': {
                    responseHeaders: null,
                    statusCode: 403
                }

            }
        },

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        {
            description: 'Test if access is forbidden to files that can expose sensitive information',
            files: {

                '%23test%23': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.bak': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.conf': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.dist': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.fla': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.inc': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.ini': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.log': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.psd': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.sh': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.sql': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.swo': {
                    responseHeaders: null,
                    statusCode: 403
                },

                'test.swp': {
                    responseHeaders: null,
                    statusCode: 403
                }

            }
        },

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        {
            description: 'Test if files are served compressed, even if the request is made with a mangled `Accept-Encoding` HTTP header',
            files: {

                'test.1.js': {
                    requestHeaders: {
                        'Accept-EncodXng': 'gzip, deflate'
                    },
                    responseHeaders: {
                        'cache-control': 'max-age=31536000, no-transform',
                        'content-encoding': 'gzip'
                    }
                },

                'test.2.js': {
                    requestHeaders: {
                        'X-cept-Encoding': 'gzip, deflate'
                    },
                    responseHeaders: {
                        'cache-control': 'max-age=31536000, no-transform',
                        'content-encoding': 'gzip'
                    }
                },

                'test.3.js': {
                    requestHeaders: {
                        'XXXXXXXXXXXXXXX': 'XXXXXXXXXXXXX'
                    },
                    responseHeaders: {
                        'cache-control': 'max-age=31536000, no-transform',
                        'content-encoding': 'gzip'
                    }
                },

                'test.4.js': {
                    requestHeaders: {
                        '---------------': '-------------'
                    },
                    responseHeaders: {
                        'cache-control': 'max-age=31536000, no-transform',
                        'content-encoding': 'gzip'
                    }
                },

                'test.5.js': {
                    requestHeaders: {
                        '~~~~~~~~~~~~~~~': '~~~~~~~~~~~~~'
                    },
                    responseHeaders: {
                        'cache-control': 'max-age=31536000, no-transform',
                        'content-encoding': 'gzip'
                    }
                }

            }
        },

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        {
            description: 'Test if filename-based cache busting works',
            files: {

                // These files don't actually exist, but if the filename-based
                // caching solution works, the server should respond with
                // the responseBody of `<name.extension>` when a request is made for
                // <name.number.extension>

                'a.12345.css': {
                    requestHeaders: null,
                    responseBody:
                        '#test {\n' +
                        '    background: green;\n' +
                        '    border: 1px solid green;\n' +
                        '    color: green;\n' +
                        '}\n',
                    responseHeaders: null
                },

                'a.12345.js': {
                    requestHeaders: null,
                    responseBody:
                        'var test1 = "test"\n' +
                        'var test2 = "test"\n' +
                        'var test3 = "test"\n' +
                        'var test4 = "test"\n' +
                        'var test5 = "test"\n',
                    responseHeaders: null
                },

                'test.12345.bmp': {
                    responseHeaders: null
                },

                'test.12345.cur': {
                    responseHeaders: null
                },

                'test.12345.gif': {
                    responseHeaders: null
                },

                'test.12345.ico': {
                    responseHeaders: null
                },

                'test.12345.jpeg': {
                    responseHeaders: null
                },

                'test.12345.jpg': {
                    responseHeaders: null
                },

                'test.12345.png': {
                    responseHeaders: null
                },

                'test.12345.svg': {
                    responseHeaders: null
                },

                'test.12345.svgz': {
                    responseHeaders: null
                },

                'test.12345.webp': {
                    responseHeaders: null
                },

                'test.12345.webmanifest': {
                    requestHeaders: null,
                    responseBody:
                        '{\n' +
                        '  "lang": "en",\n' +
                        '  "name": "Test",\n' +
                        '  "short_name": "Test",\n' +
                        '  "icons": [{\n' +
                        '    "src": "icon/lowres",\n' +
                        '    "sizes": "64x64",\n' +
                        '    "type": "image/webp"\n' +
                        '  }, {\n' +
                        '    "src": "icon/hd_small",\n' +
                        '    "sizes": "64x64"\n' +
                        '  }, {\n' +
                        '    "src": "icon/hd_hi",\n' +
                        '    "sizes": "128x128",\n' +
                        '    "density": 2\n' +
                        '  }],\n' +
                        '  "scope": "/",\n' +
                        '  "start_url": "/index.html",\n' +
                        '  "display": "fullscreen",\n' +
                        '  "orientation": "landscape",\n' +
                        '  "theme_color": "aliceblue"\n' +
                        '}\n',
                    responseHeaders: null
                }

            }
        },

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        {
            description: 'Test if file concatenation works',
            files: {

                'a_and_b.combined.js': {
                    requestHeaders: null,
                    responseBody:
                        'var test1 = "test"\n' +
                        'var test2 = "test"\n' +
                        'var test3 = "test"\n' +
                        'var test4 = "test"\n' +
                        'var test5 = "test"\n' +
                        '\n' +
                        'var test6 = "test"\n' +
                        'var test7 = "test"\n' +
                        'var test8 = "test"\n' +
                        'var test9 = "test"\n' +
                        'var test10 = "test"\n' +
                        '\n',
                    responseHeaders: null
                },

                'a_and_b.combined.css': {
                    requestHeaders: null,
                    responseBody:
                        '#test {\n' +
                        '    background: green;\n' +
                        '    border: 1px solid green;\n' +
                        '    color: green;\n' +
                        '}\n\n' +
                        '#test {\n' +
                        '    background: hotpink;\n' +
                        '    border: 1px solid hotpink;\n' +
                        '    color: hotpink;\n' +
                        '}\n\n',
                    responseHeaders: null
                },

            }
        }

    ]

};
