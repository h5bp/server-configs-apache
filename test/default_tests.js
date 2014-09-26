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
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'application/xml; charset=utf-8'
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
                        'accept-encoding': 'gzip, deflate, sdch',
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
                        'cache-control': 'max-age=2592000, no-transform',
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
                        'accept-encoding': 'gzip, deflate, sdch',
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
                        'accept-encoding': 'gzip, deflate, sdch',
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
                        'accept-encoding': 'gzip, deflate, sdch',
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
                        'accept-encoding': 'gzip, deflate, sdch',
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

                'test.manifest': {
                    responseHeaders: {
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'text/cache-manifest'
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
                        'accept-encoding': 'gzip, deflate, sdch',
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
                        'cache-control': 'max-age=0, no-transform',
                        'content-type': 'application/xml; charset=utf-8'
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
                        'accept-encoding': 'gzip, deflate, sdch',
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

                'test.vcf': {
                    responseHeaders: {
                        'content-encoding': null,
                        'content-type': 'text/x-vcard'
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

                'test.webp': {
                    requestHeaders: {
                        'origin': 'http://'
                    },
                    responseHeaders: {
                        'access-control-allow-origin': '*',
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
                },

                '.well-known/manifest.json': {
                    responseHeaders: {
                        'cache-control': 'max-age=31536000, no-transform',
                        'content-type': 'application/manifest+json; charset=utf-8'
                    }
                }

            }
        }

    ]

};
