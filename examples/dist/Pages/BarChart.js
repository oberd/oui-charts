'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AbstractExample2 = require('./AbstractExample');

var _AbstractExample3 = _interopRequireDefault(_AbstractExample2);

var _Charts = require('../../../dist/Charts');

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var chance = new _chance2.default('hi');

var BarChart = function (_AbstractExample) {
    _inherits(BarChart, _AbstractExample);

    function BarChart() {
        _classCallCheck(this, BarChart);

        return _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).apply(this, arguments));
    }

    _createClass(BarChart, [{
        key: 'generateData',
        value: function generateData() {
            var withDeviation = Math.random() > 0.5;
            var count = Math.ceil(Math.random() * 10);
            var keyCount = Math.ceil(Math.random() * 5);
            var maxVal = Math.random() * 40 + 10;
            var minVal = 0;
            var newData = [];
            var newDeviation = [];
            var newObj = void 0;
            var newDev = void 0;
            for (var i = 0; i < count; i++) {
                newObj = { _label: chance.word() };
                newDev = { _label: chance.word() };
                for (var j = 0; j < keyCount; j++) {
                    if (withDeviation) {
                        newObj[j] = Math.random() * maxVal + minVal;
                    } else {
                        newObj[j] = Math.random() * maxVal + minVal;
                        newDev[j] = newObj[j] * 0.2;
                        newDeviation.push(newDev);
                    }
                }
                newData.push(newObj);
            }
            return { data: newData, standardDeviation: newDeviation.length ? newDeviation : false };
        }
    }, {
        key: 'renderChart',
        value: function renderChart() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Charts.Chart,
                    { width: '100%', height: '400', hover: true },
                    _react2.default.createElement(_Charts.Bars, { data: this.state.data, standardDeviation: this.state.standardDeviation }),
                    _react2.default.createElement(_Charts.BucketX, { data: this.state.data })
                ),
                _react2.default.createElement(_Charts.Legend, { data: this.state.data })
            );
        }
    }]);

    return BarChart;
}(_AbstractExample3.default);

exports.default = BarChart;