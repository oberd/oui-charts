'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentsExample = require('../Components/Example');

var _ComponentsExample2 = _interopRequireDefault(_ComponentsExample);

var _chance = require('chance');

var _chance2 = _interopRequireDefault(_chance);

var chance = new _chance2['default']('hi');

var data = [{ one: 1, two: 5, three: 6, four: 8 }, { one: 3, two: 4, three: 9, four: 9 }, { one: 2, two: 7, three: 12, four: 10 }, { one: 2, two: 7, three: 12, four: null }];

var data2 = [{ one: 1, two: 5 }];

var AbstractExample = (function (_Component) {
    _inherits(AbstractExample, _Component);

    function AbstractExample() {
        _classCallCheck(this, AbstractExample);

        _Component.apply(this, arguments);

        this.state = { data: data, data2: data2 };
    }

    AbstractExample.prototype.renderChart = function renderChart() {
        return _react2['default'].createElement('div', null);
    };

    AbstractExample.prototype.render = function render() {
        return _react2['default'].createElement(
            _ComponentsExample2['default'],
            { title: this.title, onRandomize: this.handleRandomize.bind(this) },
            this.renderChart()
        );
    };

    AbstractExample.prototype.handleRandomize = function handleRandomize() {
        var count = Math.ceil(Math.random() * 10);
        var keyCount = Math.ceil(Math.random() * 5);
        var maxVal = Math.random() * 40 + 10;
        var minVal = 0;
        var newData = [];
        var newObj = undefined;
        for (var i = 0; i < count; i++) {
            newObj = { _label: chance.word() };
            for (var j = 0; j < keyCount; j++) {
                newObj[j] = Math.random() * maxVal + minVal;
            }
            newData.push(newObj);
        }
        this.setState({ data: newData });
    };

    return AbstractExample;
})(_react.Component);

exports['default'] = AbstractExample;
module.exports = exports['default'];