'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactRouter = require('react-router');

var _historyLibCreateBrowserHistory = require('history/lib/createBrowserHistory');

var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

var history = _historyLibCreateBrowserHistory2['default']();

document.addEventListener('DOMContentLoaded', function () {
    _reactDom.render(_react2['default'].createElement(
        _reactRouter.Router,
        { history: history },
        _routes2['default']
    ), document);
});