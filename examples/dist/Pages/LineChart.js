'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractExample2 = require('./AbstractExample');

var _AbstractExample3 = _interopRequireDefault(_AbstractExample2);

var _libChartsChart = require('../../../lib/Charts/Chart');

var _libChartsChart2 = _interopRequireDefault(_libChartsChart);

var _libChartsLines = require('../../../lib/Charts/Lines');

var _libChartsLines2 = _interopRequireDefault(_libChartsLines);

var _libChartsLegend = require('../../../lib/Charts/Legend');

var _libChartsLegend2 = _interopRequireDefault(_libChartsLegend);

var _libChartsAxisBucketX = require('../../../lib/Charts/Axis/BucketX');

var _libChartsAxisBucketX2 = _interopRequireDefault(_libChartsAxisBucketX);

var LineChart = (function (_AbstractExample) {
    _inherits(LineChart, _AbstractExample);

    function LineChart() {
        _classCallCheck(this, LineChart);

        _AbstractExample.apply(this, arguments);
    }

    LineChart.prototype.renderChart = function renderChart() {
        return _react2['default'].createElement(
            'div',
            null,
            _react2['default'].createElement(
                _libChartsChart2['default'],
                { width: '100%', height: '400' },
                _react2['default'].createElement(_libChartsLines2['default'], { data: this.state.data }),
                _react2['default'].createElement(_libChartsAxisBucketX2['default'], { data: this.state.data })
            ),
            _react2['default'].createElement(_libChartsLegend2['default'], { data: this.state.data })
        );
    };

    return LineChart;
})(_AbstractExample3['default']);

exports['default'] = LineChart;
module.exports = exports['default'];