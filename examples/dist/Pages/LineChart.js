'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractExample2 = require('./AbstractExample');

var _AbstractExample3 = _interopRequireDefault(_AbstractExample2);

var _Charts = require('../../../dist/Charts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineChart = (function (_AbstractExample) {
    _inherits(LineChart, _AbstractExample);

    function LineChart() {
        _classCallCheck(this, LineChart);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LineChart).apply(this, arguments));
    }

    _createClass(LineChart, [{
        key: 'renderChart',
        value: function renderChart() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Charts.Chart,
                    { width: '100%', height: '400' },
                    _react2.default.createElement(_Charts.Lines, { data: this.state.data }),
                    _react2.default.createElement(_Charts.BucketX, { data: this.state.data })
                ),
                _react2.default.createElement(_Charts.Legend, { data: this.state.data })
            );
        }
    }]);

    return LineChart;
})(_AbstractExample3.default);

exports.default = LineChart;