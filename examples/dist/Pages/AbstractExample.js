'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Example = require('../Components/Example');

var _Example2 = _interopRequireDefault(_Example);

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var chance = new _chance2.default('hi');

var data = [{ one: 1, two: 5, three: 6, four: 8 }, { one: 3, two: 4, three: 9, four: 9 }, { one: 2, two: 7, three: 12, four: 10 }, { one: 2, two: 7, three: 12, four: null }];

var data2 = [{ one: 1, two: 5 }];

var AbstractExample = function (_Component) {
    _inherits(AbstractExample, _Component);

    function AbstractExample() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AbstractExample);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AbstractExample.__proto__ || Object.getPrototypeOf(AbstractExample)).call.apply(_ref, [this].concat(args))), _this), _this.state = { data: data, data2: data2, standardDeviation: false, noChart: false }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AbstractExample, [{
        key: 'renderChart',
        value: function renderChart() {
            return _react2.default.createElement('div', null);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _Example2.default,
                { title: this.title, onRandomize: this.handleRandomize.bind(this), onRemountAndRandomize: this.handleRemount.bind(this) },
                this.state.noChart ? 'Loading...' : this.renderChart()
            );
        }
    }, {
        key: 'generateData',
        value: function generateData() {
            var count = Math.ceil(Math.random() * 10);
            var keyCount = Math.ceil(Math.random() * 5);
            var maxVal = Math.random() * 40 + 10;
            var minVal = 0;
            var newData = [];
            var newObj = void 0;
            for (var i = 0; i < count; i++) {
                newObj = { _label: chance.word() };
                for (var j = 0; j < keyCount; j++) {
                    newObj[j] = Math.random() * maxVal + minVal;
                }
                newData.push(newObj);
            }
            console.log(newData);
            return { data: newData };
        }
    }, {
        key: 'handleRandomize',
        value: function handleRandomize() {
            this.setState(this.generateData());
        }
    }, {
        key: 'handleRemount',
        value: function handleRemount() {
            var _this2 = this;

            var newData = this.generateData();
            newData.noChart = true;
            this.setState(newData);
            setTimeout(function () {
                return _this2.setState({ noChart: false });
            }, 100);
        }
    }]);

    return AbstractExample;
}(_react.Component);

exports.default = AbstractExample;