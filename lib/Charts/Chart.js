'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('../PropTypes');

var Chart = (function (_Component) {
    _inherits(Chart, _Component);

    function Chart() {
        _classCallCheck(this, Chart);

        _Component.apply(this, arguments);
    }

    Chart.prototype.getChildContext = function getChildContext() {
        var _props = this.props;
        var padding = _props.padding;
        var outerPadding = _props.outerPadding;

        return { padding: padding, outerPadding: outerPadding };
    };

    Chart.prototype.render = function render() {
        var _props2 = this.props;
        var width = _props2.width;
        var height = _props2.height;
        var children = _props2.children;

        return _react2['default'].createElement(
            'svg',
            { width: width, height: height },
            children
        );
    };

    _createClass(Chart, null, [{
        key: 'propTypes',
        value: {
            width: _PropTypes.Size,
            height: _PropTypes.Size,
            padding: _react.PropTypes.number,
            outerPadding: _react.PropTypes.number,
            children: _PropTypes.Children
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            padding: 0.1,
            outerPadding: 0.1,
            width: '100%',
            height: 400
        },
        enumerable: true
    }, {
        key: 'childContextTypes',
        value: {
            padding: _react.PropTypes.number,
            outerPadding: _react.PropTypes.number
        },
        enumerable: true
    }]);

    return Chart;
})(_react.Component);

exports['default'] = Chart;
module.exports = exports['default'];