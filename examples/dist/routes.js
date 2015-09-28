'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ComponentsLayout = require('./Components/Layout');

var _ComponentsLayout2 = _interopRequireDefault(_ComponentsLayout);

var _PagesHome = require('./Pages/Home');

var _PagesHome2 = _interopRequireDefault(_PagesHome);

var _PagesBarChart = require('./Pages/BarChart');

var _PagesBarChart2 = _interopRequireDefault(_PagesBarChart);

var _PagesLineChart = require('./Pages/LineChart');

var _PagesLineChart2 = _interopRequireDefault(_PagesLineChart);

var _PagesBarAndLine = require('./Pages/BarAndLine');

var _PagesBarAndLine2 = _interopRequireDefault(_PagesBarAndLine);

exports['default'] = _react2['default'].createElement(
    _reactRouter.Route,
    { path: '/', component: _ComponentsLayout2['default'] },
    _react2['default'].createElement(_reactRouter.IndexRoute, { components: { main: _PagesHome2['default'] } }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/bar-chart', components: { main: _PagesBarChart2['default'] } }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/line-chart', components: { main: _PagesLineChart2['default'] } }),
    _react2['default'].createElement(_reactRouter.Route, { path: '/bar-and-line', components: { main: _PagesBarAndLine2['default'] } })
);
module.exports = exports['default'];