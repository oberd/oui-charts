'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Example = (function (_Component) {
    _inherits(Example, _Component);

    function Example() {
        _classCallCheck(this, Example);

        _Component.apply(this, arguments);
    }

    Example.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                'h2',
                null,
                this.props.title
            ),
            _react2['default'].createElement(
                'button',
                { onClick: this.props.onRandomize },
                'Randomize'
            ),
            this.props.children
        );
    };

    _createClass(Example, null, [{
        key: 'propTypes',
        value: {
            title: _react.PropTypes.string,
            children: _react.PropTypes.any,
            onRandomize: _react.PropTypes.func
        },
        enumerable: true
    }]);

    return Example;
})(_react.Component);

exports['default'] = Example;
module.exports = exports['default'];