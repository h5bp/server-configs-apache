'use strict';

var pkg = require('./../../package.json');

var string = '# Apache Server Configs v' + pkg.version + ' | ' + pkg.license + ' License\n' +
             '# ' + pkg.homepage + '\n\n';

process.stdout.write(string);
