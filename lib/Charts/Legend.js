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

var Legend = (function (_Component) {
    _inherits(Legend, _Component);

    function Legend() {
        _classCallCheck(this, Legend);

        _Component.apply(this, arguments);
    }

    Legend.prototype.getColorScale = function getColorScale() {
        var _this = this;

        if (this.props.data.length) {
            var _ret = (function () {
                var valKeys = Object.keys(_this.props.data[0]).filter(function (key) {
                    return key !== '_label';
                });
                var color = _d32['default'].scale.category20().domain(_d32['default'].range(valKeys.length));
                return {
                    v: valKeys.map(function (key, i) {
                        return { label: key, color: color(i) };
                    })
                };
            })();

            if (typeof _ret === 'object') return _ret.v;
        }
    };

    Legend.prototype.render = function render() {
        var colorScale = this.getColorScale();
        return _react2['default'].createElement(
            'div',
            { className: 'flex-row legend' },
            colorScale.map(function (series, i) {
                return _react2['default'].createElement(
                    'div',
                    { className: 'legend flex-row', key: i },
                    _react2['default'].createElement('div', { className: 'legend-color', style: { backgroundColor: series.color } }),
                    _react2['default'].createElement(
                        'div',
                        { className: 'legend-label flex' },
                        series.label
                    )
                );
            })
        );
    };

    _createClass(Legend, null, [{
        key: 'propTypes',
        value: {
            data: _react.PropTypes.array.isRequired
        },
        enumerable: true
    }]);

    return Legend;
})(_react.Component);

exports['default'] = Legend;
module.exports = exports['default'];