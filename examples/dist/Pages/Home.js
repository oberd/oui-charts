'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var Home = (function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        _Component.apply(this, arguments);
    }

    Home.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'h1',
                null,
                'Examples'
            ),
            _react2['default'].createElement(
                'nav',
                null,
                _react2['default'].createElement(
                    'ul',
                    null,
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/bar-chart' },
                            'Bar Chart'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/line-chart' },
                            'Line Chart'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter.Link,
                            { to: '/bar-and-line' },
                            'Bar and Line Chart'
                        )
                    )
                )
            )
        );
    };

    _createClass(Home, null, [{
        key: 'propTypes',
        value: {},
        enumerable: true
    }]);

    return Home;
})(_react.Component);

exports['default'] = Home;
module.exports = exports['default'];