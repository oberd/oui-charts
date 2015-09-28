'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractExample2 = require('./AbstractExample');

var _AbstractExample3 = _interopRequireDefault(_AbstractExample2);

var _distCharts = require('../../../dist/Charts');

var BarChart = (function (_AbstractExample) {
    _inherits(BarChart, _AbstractExample);

    function BarChart() {
        _classCallCheck(this, BarChart);

        _AbstractExample.apply(this, arguments);
    }

    BarChart.prototype.renderChart = function renderChart() {
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                _distCharts.Chart,
                { width: '100%', height: '400' },
                _react2['default'].createElement(_distCharts.Bars, { data: this.state.data }),
                _react2['default'].createElement(_distCharts.BucketX, { data: this.state.data })
            ),
            _react2['default'].createElement(_distCharts.Legend, { data: this.state.data })
        );
    };

    return BarChart;
})(_AbstractExample3['default']);

exports['default'] = BarChart;
module.exports = exports['default'];