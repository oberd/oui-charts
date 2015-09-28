'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('babel-core/polyfill');

var _ = require('../');

var _2 = _interopRequireDefault(_);

_2['default'].listen(process.env.PORT || 9000);