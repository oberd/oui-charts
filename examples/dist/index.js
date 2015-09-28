'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var marked0$0 = [react].map(regeneratorRuntime.mark);

require('babel-core/polyfill');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactRouter = require('react-router');

var _historyLibCreateLocation = require('history/lib/createLocation');

var _historyLibCreateLocation2 = _interopRequireDefault(_historyLibCreateLocation);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var app = _koa2['default']();
var router = _koaRouter2['default']();

function react(location) {
    return regeneratorRuntime.wrap(function react$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                return context$1$0.abrupt('return', new Promise(function (resolve) {
                    _reactRouter.match({ routes: _routes2['default'], location: location }, function (error, redirectLocation, renderProps) {
                        if (error || !renderProps) {
                            resolve(false);
                        } else {
                            var content = '<!doctype html>';
                            content += _reactDomServer.renderToString(_react2['default'].createElement(_reactRouter.RoutingContext, renderProps));
                            resolve(content);
                        }
                    });
                }));

            case 1:
            case 'end':
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

app.use(regeneratorRuntime.mark(function callee$0$0(next) {
    var location, result;
    return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                location = _historyLibCreateLocation2['default'](this.request.path, this.request.query);
                context$1$0.next = 3;
                return react(location);

            case 3:
                result = context$1$0.sent;

                if (result) {
                    context$1$0.next = 9;
                    break;
                }

                context$1$0.next = 7;
                return next;

            case 7:
                context$1$0.next = 10;
                break;

            case 9:
                this.body = result;

            case 10:
            case 'end':
                return context$1$0.stop();
        }
    }, callee$0$0, this);
}));

app.use(_koaStatic2['default'](_path2['default'].join(process.cwd(), 'examples', 'public')));

exports['default'] = app;
module.exports = exports['default'];