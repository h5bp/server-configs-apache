exports = module.exports = {

    // These default values will overwrite the base
    // default values provided by `server-configs-test`

    'defaultResponseHeaders': {
        'server': 'Apache',
    },

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // Server specific tests

    'tests': [

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

                '.well-known/manifest.json': {
                    requestHeaders: null,
                    responseBody:
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
                    responseHeaders: null,
                },

                '.well-known/.hidden_directory/': {
                    responseHeaders: null,
                    statusCode: 403
                },

                '.well-known/.hidden_directory/test.html': {
                    responseHeaders: null,
                    statusCode: 403
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
