'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactMixin = require('react-mixin');

var _MixinsAnimatedPrimitive = require('../Mixins/AnimatedPrimitive');

var _MixinsAnimatedPrimitive2 = _interopRequireDefault(_MixinsAnimatedPrimitive);

var Rect = (function (_Component) {
    _inherits(Rect, _Component);

    function Rect() {
        _classCallCheck(this, _Rect);

        _Component.apply(this, arguments);
    }

    Rect.prototype.componentDidMount = function componentDidMount() {
        var _props = this.props;
        var animationDuration = _props.animationDuration;
        var animationDelay = _props.animationDelay;

        if (animationDuration) {
            var $el = _d32['default'].select(_reactDom.findDOMNode(this));
            var initialY = $el.attr('y');
            $el.attr('y', '100%').transition().duration(animationDuration).delay(animationDelay).attr('y', initialY);
        }
    };

    Rect.prototype.render = function render() {
        return _react2['default'].createElement('rect', this.props);
    };

    _createClass(Rect, null, [{
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

    var _Rect = Rect;
    Rect = _reactMixin.decorate(_MixinsAnimatedPrimitive2['default'])(Rect) || Rect;
    return Rect;
})(_react.Component);

exports['default'] = Rect;
module.exports = exports['default'];