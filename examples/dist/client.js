'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactRouter = require('react-router');

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

document.addEventListener('DOMContentLoaded', function () {
    (0, _reactDom.render)(_react2.default.createElement(
        _reactRouter.Router,
        { history: history },
        _routes2.default
    ), document);
});