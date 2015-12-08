'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _createLocation = require('history/lib/createLocation');

var _createLocation2 = _interopRequireDefault(_createLocation);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [react].map(regeneratorRuntime.mark);
// import koaRouter from 'koa-router';

var app = (0, _koa2.default)();
// const router = koaRouter();

function react(location) {
    return regeneratorRuntime.wrap(function react$(_context) {
        while (1) switch (_context.prev = _context.next) {
            case 0:
                return _context.abrupt('return', new Promise(function (resolve) {
                    (0, _reactRouter.match)({ routes: _routes2.default, location: location }, function (error, redirectLocation, renderProps) {
                        if (error || !renderProps) {
                            resolve(false);
                        } else {
                            var content = '<!doctype html>';
                            content += (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RoutingContext, renderProps));
                            resolve(content);
                        }
                    });
                }));

            case 1:
            case 'end':
                return _context.stop();
        }
    }, _marked[0], this);
}

app.use(regeneratorRuntime.mark(function _callee(next) {
    var location, result;
    return regeneratorRuntime.wrap(function _callee$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    location = (0, _createLocation2.default)(this.request.path, this.request.query);
                    _context2.next = 3;
                    return react(location);

                case 3:
                    result = _context2.sent;

                    if (result) {
                        _context2.next = 9;
                        break;
                    }

                    _context2.next = 7;
                    return next;

                case 7:
                    _context2.next = 10;
                    break;

                case 9:
                    this.body = result;

                case 10:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _callee, this);
}));

app.use((0, _koaStatic2.default)(_path2.default.join(process.cwd(), 'examples', 'public')));

exports.default = app;