'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Layout = require('./Components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Home = require('./Pages/Home');

var _Home2 = _interopRequireDefault(_Home);

var _BarChart = require('./Pages/BarChart');

var _BarChart2 = _interopRequireDefault(_BarChart);

var _LineChart = require('./Pages/LineChart');

var _LineChart2 = _interopRequireDefault(_LineChart);

var _BarAndLine = require('./Pages/BarAndLine');

var _BarAndLine2 = _interopRequireDefault(_BarAndLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _Layout2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { components: { main: _Home2.default } }),
    _react2.default.createElement(_reactRouter.Route, { path: '/bar-chart', components: { main: _BarChart2.default } }),
    _react2.default.createElement(_reactRouter.Route, { path: '/line-chart', components: { main: _LineChart2.default } }),
    _react2.default.createElement(_reactRouter.Route, { path: '/bar-and-line', components: { main: _BarAndLine2.default } })
);

exports.default = routes;