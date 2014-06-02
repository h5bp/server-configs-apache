var assert = require('assert');
var http   = require('http');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var tests = [

    /*

    Example test:

    {
        description: '<test_description>'
        files: {

            '<file>': {

                // The expected HTTP response body data
                // (note: We could have just read the expected content directly
                //  from the files. However, doing so would just add to the time
                //  the tests take without bringing much value, considering that
                //  the content of the fixtures won't probably change.)
                content: '<content>',

                // The expected HTTP response headers
                headers: {
                    '<header>': generateHeaders({
                            // custom values
                            '<header>': '<header_value>' | undefined,
                                                             └─ indicates that the HTTP response
                                                                header should NOT be present
                            ...
                    })
                },

                // The expected HTTP response status code
                // (by default 200 is assumed)
                statusCode: <statusCode>,

                // The HTTP headers that will be sent when the request is made
                // (by default `accept-encoding: gzip, deflate, sdch` is sent)
                requestHeaders: {
                    '<header>': '<header_value>',
                    ...
                }

            },

            ...
        }
    }

    */

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    {
        description: 'Test if files are served with the correct HTTP headers',
        files: {

            'test.appcache': {
                headers: generateHeaders({
                    'cache-control': 'max-age=0, no-transform',
                    'content-encoding': undefined,
                    'content-type': 'text/cache-manifest'
                })
            },

            'test.atom': {
                headers: generateHeaders({
                    'cache-control': 'max-age=0, no-transform',
                    'content-type': 'application/xml; charset=utf-8'
                })
            },

            'test.crx': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'application/x-chrome-extension'
                })
            },

            'test.css': {
                headers: generateHeaders({
                    'cache-control': 'max-age=31536000, no-transform',
                    'content-type': 'text/css; charset=utf-8'
                })
            },

            'test.cur': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'cache-control': 'max-age=604800, no-transform',
                    'content-type': 'image/x-icon'
                }),
                requestHeaders: {
                    'accept-encoding': 'gzip, deflate, sdch',
                    'origin': 'http://'
                }
            },

            'test.eot': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-type': 'application/vnd.ms-fontobject'
                })
            },

            'test.f4a': {
                headers: generateHeaders({
                    'cache-control': 'max-age=2592000, no-transform',
                    'content-encoding': undefined,
                    'content-type': 'audio/mp4'
                })
            },

            'test.f4b': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'audio/mp4'
                })
            },

            'test.f4p': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'video/mp4'
                })
            },

            'test.f4v': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'video/mp4'
                })
            },

            'test.flv': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'video/x-flv'
                })
            },

            'test.gif': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-encoding': undefined,
                    'content-type': 'image/gif'
                }),
                requestHeaders: {
                    'accept-encoding': 'gzip, deflate, sdch',
                    'origin': 'http://'
                }
            },

            'test.htc': {
                headers: generateHeaders({
                    'content-type': 'text/x-component'
                })
            },

            'test.html': {
                headers: generateHeaders({
                    'cache-control': 'max-age=0, no-transform',
                    'content-security-policy': "script-src 'self'; object-src 'self'",
                    'content-type': 'text/html; charset=utf-8',
                    'x-frame-options': 'DENY',
                    'x-ua-compatible': 'IE=edge',
                    'x-xss-protection': '1; mode=block'
                })
            },

            'test.ico': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'cache-control': 'max-age=604800, no-transform',
                    'content-type': 'image/x-icon'
                }),
                requestHeaders: {
                    'accept-encoding': 'gzip, deflate, sdch',
                    'origin': 'http://'
                }
            },

            'test.jpeg': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-encoding': undefined,
                    'content-type': 'image/jpeg'
                }),
                requestHeaders: {
                    'accept-encoding': 'gzip, deflate, sdch',
                    'origin': 'http://'
                }
            },

            'test.jpg': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-encoding': undefined,
                    'content-type': 'image/jpeg'
                }),
                requestHeaders: {
                    'accept-encoding': 'gzip, deflate, sdch',
                    'origin': 'http://'
                }
            },

            'test.js': {
                headers: generateHeaders({
                    'cache-control': 'max-age=31536000, no-transform',
                    'content-type': 'application/javascript; charset=utf-8'
                })
            },

            'test.json': {
                headers: generateHeaders({
                    'cache-control': 'max-age=0, no-transform',
                    'content-type': 'application/json; charset=utf-8'
                })
            },

            'test.jsonld': {
                headers: generateHeaders({
                    'cache-control': 'max-age=0, no-transform',
                    'content-type': 'application/ld+json; charset=utf-8'
                })
            },

            'test.m4a': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'audio/mp4'
                })
            },

            'test.m4v': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'video/mp4'
                })
            },

            'test.manifest': {
                headers: generateHeaders({
                    'cache-control': 'max-age=0, no-transform',
                    'content-encoding': undefined,
                    'content-type': 'text/cache-manifest'
                })
            },

            'test.map': {
                headers: generateHeaders({
                    'cache-control': 'max-age=0, no-transform',
                    'content-type': 'application/json'
                })
            },

            'test.mp4': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'video/mp4'
                })
            },

            'test.oex': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'application/x-opera-extension'
                })
            },

            'test.oga': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'audio/ogg'
                })
            },

            'test.ogg': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'audio/ogg'
                })
            },

            'test.ogv': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'video/ogg'
                })
            },

            'test.opus': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'audio/ogg'
                })
            },

            'test.otf': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-type': 'font/opentype'
                })
            },

            'test.pdf': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'application/pdf'
                })
            },

            'test.png': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-encoding': undefined,
                    'content-type': 'image/png'
                }),
                requestHeaders: {
                    'accept-encoding': 'gzip, deflate, sdch',
                    'origin': 'http://'
                }
            },

            'test.rdf': {
                headers: generateHeaders({
                    'cache-control': 'max-age=0, no-transform',
                    'content-type': 'application/xml'
                })
            },

            'test.rss': {
                headers: generateHeaders({
                    'cache-control': 'max-age=0, no-transform',
                    'content-type': 'application/xml; charset=utf-8'
                })
            },

            'test.safariextz': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'application/octet-stream'
                })
            },

            'test.svg': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-type': 'image/svg+xml'
                }),
                requestHeaders: {
                    'accept-encoding': 'gzip, deflate, sdch',
                    'origin': 'http://'
                }
            },

            'test.svgz': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-type': 'image/svg+xml'
                }),
                requestHeaders: {
                    // the 'accept-encoding' HTTP header is not necessary in this case
                    'origin': 'http://'
                }
            },

            'test.swf': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'application/x-shockwave-flash'
                })
            },

            'test.ttc': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-type': 'application/x-font-ttf'
                })
            },

            'test.ttf': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-type': 'application/x-font-ttf'
                })
            },

            'test.txt': {
                headers: generateHeaders({
                    'content-type': 'text/plain; charset=utf-8'
                })
            },

            'test.vcf': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'text/x-vcard'
                })
            },

            'test.vtt': {
                headers: generateHeaders({
                    'content-type': 'text/vtt; charset=utf-8'
                })
            },

            'test.webapp': {
                headers: generateHeaders({
                    'cache-control': 'max-age=0, no-transform',
                    'content-type': 'application/x-web-app-manifest+json; charset=utf-8'
                })
            },

            'test.webm': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'video/webm'
                })
            },

            'test.webp': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-encoding': undefined,
                    'content-type': 'image/webp'
                }),
                requestHeaders: {
                    'origin': 'http://'
                }
            },

            'test.woff': {
                headers: generateHeaders({
                    'access-control-allow-origin': '*',
                    'content-encoding': undefined,
                    'content-type': 'application/font-woff'
                })
            },

            'test.xml': {
                headers: generateHeaders({
                    'cache-control': 'max-age=0, no-transform',
                    'content-type': 'application/xml; charset=utf-8'
                })
            },

            'test.xpi': {
                headers: generateHeaders({
                    'content-encoding': undefined,
                    'content-type': 'application/x-xpinstall'
                })
            }

        }
    },

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    {
        description: 'Test if the server has the `MultiViews` option disabled (does NOT pattern match based on filenames)',
        files: {

            // `test/multiviews/foo` does NOT exist, but if the
            // `MultiViews` option is enabled, the server will
            // return the content of `test/multiviews/foo.html`

            'test/multiviews/foo': {
                content:
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
                requestHeaders: {},
                statusCode: 404
            }

        }
    },

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    {
        description: 'Test if the custom 404 page is returned to the client in case of an 404 error',
        files: {

            'this/does/not.exist': {
                content:
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
                requestHeaders: {},
                statusCode: 404
            }

        }
    },

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    {
        description: 'Test if access is forbidden to directories without a default document',
        files: {

            'test/': {
                statusCode: 403
            }

        }
    },

    {
        description: 'Test if access is forbidden to hidden files and directories with the exception of the visible content from within the `/.well-known/` hidden directory',
        files: {

            '.hidden_file': {
                statusCode: 403
            },

            '.hidden_directory/': {
                statusCode: 403
            },

            '.well-known/': {
                statusCode: 403
            },

            '.well-known/manifest.json': {
                content:
                    '{\n' +
                    '    "name": "test",\n' +
                    '    "icons": [{\n' +
                    '        "src": "icon/lowres",\n' +
                    '        "sizes": "64x64",\n' +
                    '        "type": "image/webp"\n' +
                    '    }, {\n' +
                    '        "src": "icon/hd_small",\n' +
                    '        "sizes": "64x64"\n' +
                    '    }, {\n' +
                    '        "src": "icon/hd_hi",\n' +
                    '        "sizes": "128x128"\n' +
                    '    }],\n' +
                    '    "start_url": "/start.html",\n' +
                    '    "display": "fullscreen",\n' +
                    '    "orientation": "landscape"\n' +
                    '}\n',
                requestHeaders: {}

            },

            '.well-known/.hidden_directory/': {
                statusCode: 403
            },

            '.well-known/.hidden_directory/test.html': {
                statusCode: 403
            },

            '.well-known/test/': {
                statusCode: 403
            },

            '.well-known/test/test.html': {
                content:
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
                requestHeaders: {}
            },

            '.well-known/test/.hidden_directory/': {
                statusCode: 403
            },

            '.well-known/test/.hidden_directory/test.html': {
                statusCode: 403
            }

        }
    },

    {
        description: 'Test if access is forbidden to files that can expose sensitive information',
        files: {

            '%23test%23': {
                statusCode: 403
            },

            'test.bak': {
                statusCode: 403
            },

            'test.conf': {
                statusCode: 403
            },

            'test.dist': {
                statusCode: 403
            },

            'test.fla': {
                statusCode: 403
            },

            'test.inc': {
                statusCode: 403
            },

            'test.ini': {
                statusCode: 403
            },

            'test.log': {
                statusCode: 403
            },

            'test.psd': {
                statusCode: 403
            },

            'test.sh': {
                statusCode: 403
            },

            'test.sql': {
                statusCode: 403
            },

            'test.swo': {
                statusCode: 403
            },

            'test.swp': {
                statusCode: 403
            }

        }
    },

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    {
        description: 'Test if files are served compressed, even if the request is made with a mangled `Accept-Encoding` HTTP header',
        files: {

            'test.1.js': {
                headers: {
                    'content-encoding': 'gzip'
                },
                requestHeaders: {
                    'Accept-EncodXng': 'gzip, deflate'
                }
            },

            'test.2.js': {
                headers: {
                    'content-encoding': 'gzip'
                },
                requestHeaders: {
                    'X-cept-Encoding': 'gzip, deflate'
                }
            },

            'test.3.js': {
                headers: {
                    'content-encoding': 'gzip'
                },
                requestHeaders: {
                    'XXXXXXXXXXXXXXX': 'XXXXXXXXXXXXX'
                }
            },

            'test.4.js': {
                headers: {
                    'content-encoding': 'gzip'
                },
                requestHeaders: {
                    '---------------': '-------------'
                }
            },

            'test.5.js': {
                headers: {
                    'content-encoding': 'gzip'
                },
                requestHeaders: {
                    '~~~~~~~~~~~~~~~': '~~~~~~~~~~~~~'
                }
            }

        }
    },

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    {
        description: 'Test if filename-based cache busting works',
        files: {

            // These files don't actually exist, but if the filename-based
            // caching solution works, the server should respond with
            // the content of `<name.extension>` when a request is made for
            // <name.number.extension>

            'a.12345.css': {
                content:
                    '#test {\n' +
                    '    background: green;\n' +
                    '    border: 1px solid green;\n' +
                    '    color: green;\n' +
                    '}\n',
                requestHeaders: {}  // The 'Accept-Encoding' header is
                                    // intentionally omitted in order
                                    // to get the content uncompressed
            },

            'a.12345.js': {
                content:
                    'var test1 = "test"\n' +
                    'var test2 = "test"\n' +
                    'var test3 = "test"\n' +
                    'var test4 = "test"\n' +
                    'var test5 = "test"\n',
                requestHeaders: {}
            },

            'test.12345.cur': {},
            'test.12345.gif': {},
            'test.12345.ico': {},
            'test.12345.jpeg': {},
            'test.12345.jpg': {},
            'test.12345.png': {},
            'test.12345.svg': {},
            'test.12345.svgz': {}

        }
    },

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    {
        description: 'Test if file concatenation works',
        files: {

            'a_and_b.combined.js': {
                content:
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
                requestHeaders: {}
            },

            'a_and_b.combined.css': {
                content:

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

                requestHeaders: {}
            },

        }
    }

];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function generateHeaders(customValues) {
    return {
        'access-control-allow-origin': customValues['access-control-allow-origin'],
        'cache-control': customValues['cache-control'] || 'max-age=2592000, no-transform',
        'content-encoding':
            // If the value `undefined` is provided, keep it!
            'content-encoding' in customValues ? customValues['content-encoding'] :
                                                 (customValues['content-encoding'] !== undefined ? customValues['content-encoding'] : 'gzip'),
        'content-security-policy': customValues['content-security-policy'],
        'content-type': customValues['content-type'],
        'etag': customValues.etag,
        'p3p': customValues.p3p || 'policyref="/w3c/p3p.xml", CP="IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT"',
        'server': customValues.server || 'Apache',
        'x-content-type-options': customValues['x-content-type-options'] || 'nosniff',
        'x-frame-options': customValues['x-frame-options'],
        'x-ua-compatible': customValues['x-ua-compatible'],
        'x-xss-protection': customValues['x-xss-protection']
    };
}

function getContentTestDescription(file, content) {
    return 'should contain the following content: "' + content.replace(/\n/g,'\\n').replace(/\r/g,'\\r') + '"';
}

function getHeaderTestDescription(file, header, headerValue) {

    var msg = 'should ';

    msg += ( headerValue === undefined ? 'NOT ': '' );
    msg += 'have the ';
    msg += '`' + header + ( headerValue !== undefined ? ': ' + headerValue  : '' )+ '` ';
    msg += 'HTTP response header';

    return msg;
}

function getStatusCodeTestDescription(file, statusCode) {
    return 'should have the HTTP response status code ' + statusCode;
}

function makeGETRequest(file, requestHeaders, callback) {

    var options = {
        agent: false,
        headers: requestHeaders || {
            'accept-encoding': 'gzip, deflate, sdch'
        },
        path: '/' + file
    };

    http.get(options, function (res) {

        var content = '';

        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            content += chunk;
        });

        res.on('end', function () {
            res.content = content;
            callback(res);
        });

    }).on('error', function (e) {
        throw new Error(e);
    });

}

function run(tests) {
    tests.forEach(function (test) {
        describe(test.description, function () {

            Object.keys(test.files).forEach(function (file) {
                describe(file, function () {

                    var values = test.files[file];
                    var content = values.content;
                    var headers = values.headers;
                    var statusCode = values.statusCode || 200;
                    var response;

                    // Make GET request and test the HTTP response status code
                    it(getStatusCodeTestDescription(file, statusCode), function (done) {
                         makeGETRequest(file, values.requestHeaders, function (res) {
                            response = res;
                            assert.equal(statusCode, res.statusCode);
                            done();
                        });
                    });

                    // Test the HTTP response headers
                    if ( headers !== undefined ) {
                        Object.keys(headers).forEach(function (header) {
                            it(getHeaderTestDescription(file, header, headers[header]), function () {
                                assert.equal(headers[header], response.headers[header]);
                            });
                        });
                    }

                    // Test the HTTP response body data
                    if ( content !== undefined ) {
                        it( getContentTestDescription(file, content), function () {
                            assert.equal(content, response.content);
                        });
                    }

                });
            });

        });
    });
}

run(tests);
