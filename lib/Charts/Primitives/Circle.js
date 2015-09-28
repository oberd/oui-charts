'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMixin = require('react-mixin');

var _MixinsAnimatedPrimitive = require('../Mixins/AnimatedPrimitive');

var _MixinsAnimatedPrimitive2 = _interopRequireDefault(_MixinsAnimatedPrimitive);

var Circle = (function (_Component) {
    _inherits(Circle, _Component);

    function Circle() {
        _classCallCheck(this, _Circle);

        _Component.apply(this, arguments);
    }

    Circle.prototype.render = function render() {
        return _react2['default'].createElement('circle', this.props);
    };

    _createClass(Circle, null, [{
        key: 'propTypes',
        value: {
            animationDuration: _react.PropTypes.number,
            animationDelay: _react.PropTypes.number
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            animationDuration: 1000,
            animationDelay: 0
        },
        enumerable: true
    }]);

    var _Circle = Circle;
    Circle = _reactMixin.decorate(_MixinsAnimatedPrimitive2['default'])(Circle) || Circle;
    return Circle;
})(_react.Component);

exports['default'] = Circle;
module.exports = exports['default'];