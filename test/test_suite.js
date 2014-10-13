var assert = require('assert');
var http = require('http');
var path = require('path');
var url = require('url');

var fileDefaultTests = 'tests.js';
var fileServerSpecificTests = process.env.SERVER_SPECIFIC_TESTS;

var URL= url.parse(process.env.BASE_URL || "http://localhost/");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function generateTestSuite(defaultTests, serverSpecificTests) {

    var defaultRequestHeaders;
    var defaultResponseHeaders;
    var defaultStatusCode;
    var tests;

    // Merge the global default values with the server specific default values
    defaultRequestHeaders = getHeaders( defaultTests.defaultRequestHeaders,
                                        serverSpecificTests.defaultRequestHeaders );

    defaultResponseHeaders = getHeaders( defaultTests.defaultResponseHeaders,
                                         serverSpecificTests.defaultResponseHeaders );

    defaultStatusCode = getStatusCode( defaultTests.defaultStatusCode,
                                       serverSpecificTests.defaultStatusCode );

    tests = defaultTests.tests.concat(serverSpecificTests.tests);

    // Update tests by taking into consideration the default values
    tests.forEach(function (test) {
        Object.keys(test.files).forEach(function (file) {
            var obj = test.files[file];

            obj.requestHeaders = getHeaders( defaultRequestHeaders,
                                             obj.requestHeaders );

            obj.responseHeaders = getHeaders( defaultResponseHeaders,
                                              obj.responseHeaders );

            obj.statusCode = getStatusCode( defaultStatusCode,
                                            obj.statusCode );

        });
    });

    return tests;
}

function getHeaders(defaultValues, values) {

    // This function will create an new object by basically taking
    // the content from the first object (default) and "merging" the
    // content from the second object.
    //
    // e.g.:
    //
    //      'obj1': {
    //          'cache-control': 'max-age=2592000, no-transform',
    //          'content-encoding': 'gzip',
    //      },
    //
    //      obj2: {
    //          'cache-control': 'max-age=0, no-transform',
    //          'server': 'Apache'
    //      },
    //
    //  will produce:
    //
    //      obj3: {
    //          'cache-control': 'max-age=0, no-transform',
    //          'content-encoding': 'gzip',
    //          'server': 'Apache'
    //      }

    var result = {};

    if ( values !== null ) { // if `values` is `null`, it means that the user
                             // doesn't want to test for these specific headers
                             // values, so we need to skip this step

        defaultValues = defaultValues !== undefined ? defaultValues : {};
        values = values !== undefined ? values : {};

        Object.keys(defaultValues).forEach(function (value) {
            if ( values[value] !== undefined ) {
                result[value] = values[value];
            } else {
                result[value] = defaultValues[value];
            }
        });

        Object.keys(values).forEach(function (value) {
            if ( result[value] === undefined ) {
                result[value] = values[value];
            }
        });

    }

    return result;
}

function getResponseBodyTestDescription(file, content) {
    return 'should contain the following content: "' +
            content.replace(/\n/g,'\\n').replace(/\r/g,'\\r') + '"';
}

function getResponseHeaderTestDescription(file, header, headerValue) {

    var msg = '';

    msg += 'should ';
    msg += ( headerValue === null ? 'NOT ': '' );
    msg += 'have the ';
    msg += '`' + header + ( headerValue !== null ? ': ' + headerValue  : '' )+ '` ';
    msg += 'HTTP response header';

    return msg;

}

function getStatusCode(defaultValue, value) {
    return value !== undefined ? value : defaultValue;
}

function getStatusCodeTestDescription(file, statusCode) {
    return 'should have the HTTP response status code ' + statusCode;
}

function makeGETRequest(path, requestHeaders, callback) {

    // Node's `http.request` options:
    // http://nodejs.org/api/http.html#http_http_request_options_callback

    var options = {

        // Agent behavior
        agent: false,  // opt out of connection pooling
                       // (defaults request to `Connection: close`)

        // Request headers
        headers: requestHeaders,

        // Domain name or IP address of the server to issue the request to
        // (defaults to 'localhost')
        host: URL.host,

        // Request path
        // (defaults to '/')
        path: URL.path + path,

        // Port of remote server
        // (defaults to 80)
        port: URL.port

    };

    http.get(options, function (res) {

        var body = '';

        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            res.body = body;
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
                    var expectedResponseBody = values.responseBody;
                    var expectedResponseHeaders = values.responseHeaders;
                    var expectedStatusCode = values.statusCode || 200;
                    var response = {}; // {} in case the server is not accessible

                    // Make GET request and test the HTTP response status code
                    it(getStatusCodeTestDescription(file, expectedStatusCode), function (done) {
                         makeGETRequest(file, values.requestHeaders, function (res) {
                            response = res;
                            assert.equal(res.statusCode, expectedStatusCode);
                            done();
                        });
                    });

                    // Test the HTTP response headers
                    if ( expectedResponseHeaders !== undefined ) {
                        Object.keys(expectedResponseHeaders).forEach(function (header) {
                            it(getResponseHeaderTestDescription(file, header, expectedResponseHeaders[header]), function () {
                                assert.equal(response.headers[header], expectedResponseHeaders[header]);
                            });
                        });
                    }

                    // Test the HTTP response body data
                    if ( expectedResponseBody !== undefined ) {
                        it(getResponseBodyTestDescription(file, expectedResponseBody), function () {
                            assert.equal(response.body, expectedResponseBody);
                        });
                    }

                });
            });

        });
    });
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function main() {

    var defaultTests;
    var serverSpecificTests;

    defaultTests = require(path.resolve(__dirname, fileDefaultTests));

    if ( fileServerSpecificTests !== undefined ) {
        serverSpecificTests = require(path.resolve('.', fileServerSpecificTests));
    } else {
        // If there are no server specific tests, just provide a dummy
        // object in order to reduce the number of checks down the line
        serverSpecificTests = { tests: [] };
    }

    run(generateTestSuite(defaultTests, serverSpecificTests));
}

main();
