require('babel-core/register');
require('babel-polyfill');

var server = require('../').default;

server.listen(process.env.PORT || 9000);
