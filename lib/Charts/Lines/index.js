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

var _reactMixin = require('react-mixin');

var _MixinsBucketData = require('../Mixins/BucketData');

var _MixinsBucketData2 = _interopRequireDefault(_MixinsBucketData);

var _PrimitivesLine = require('../Primitives/Line');

var _PrimitivesLine2 = _interopRequireDefault(_PrimitivesLine);

var _PrimitivesCircle = require('../Primitives/Circle');

var _PrimitivesCircle2 = _interopRequireDefault(_PrimitivesCircle);

var Lines = (function (_Component) {
    _inherits(Lines, _Component);

    function Lines() {
        _classCallCheck(this, _Lines);

        _Component.apply(this, arguments);
    }

    Lines.prototype.getPointX = function getPointX() {
        var range = this.getBucketScale();
        var offset = range.rangeBand() / 2;
        return function (index) {
            return range(index) + offset;
        };
    };

    Lines.prototype.getPointY = function getPointY() {
        var vals = this.getValues();
        var yExtents = this.buildYExtents();
        var y = _d32['default'].scale.linear().clamp(true).domain(this.paddedExtent(vals)).range(yExtents.reverse());
        return y;
    };

    Lines.prototype.renderPoint = function renderPoint(bucketIndex, seriesIndex, value) {
        var prevValue = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

        var out = [];
        var p = this.percent;
        var x = this.getPointX();
        var y = this.getPointY();
        var color = this.getColorScale();
        var circleKey = bucketIndex + '_' + seriesIndex;
        out.push(_react2['default'].createElement(_PrimitivesCircle2['default'], { key: circleKey,
            cx: p(x(bucketIndex)),
            cy: p(y(value)),
            r: '10',
            fill: color(seriesIndex)
        }));
        if (prevValue !== null) {
            var lineKey = 'line_' + bucketIndex + '_' + seriesIndex;
            out.push(_react2['default'].createElement(_PrimitivesLine2['default'], { key: lineKey,
                x1: p(x(bucketIndex - 1)),
                x2: p(x(bucketIndex)),
                y1: p(y(prevValue)),
                y2: p(y(value)),
                stroke: color(seriesIndex)
            }));
        }
        return out;
    };

    Lines.prototype.renderLines = function renderLines() {
        var _this = this;

        var out = [];
        var valueKeys = this.getValueKeys();
        var avg = this.getBucketAverage;
        var average = this.props.average;

        var prevBucket = null;
        this.getValidBuckets().map(function (bucket, i) {
            if (average) {
                var prevValue = prevBucket ? avg(prevBucket) : null;
                out = out.concat(_this.renderPoint(i, valueKeys.length, avg(bucket), prevValue));
            } else {
                valueKeys.forEach(function (key, j) {
                    var prevValue = prevBucket ? prevBucket[key] : null;
                    out = out.concat(_this.renderPoint(i, j, bucket[key], prevValue));
                });
            }
            prevBucket = bucket;
        });
        return out;
    };

    Lines.prototype.render = function render() {
        return _react2['default'].createElement(
            'g',
            null,
            this.renderLines()
        );
    };

    _createClass(Lines, null, [{
        key: 'propTypes',
        value: {
            data: _react.PropTypes.array.isRequired,
            average: _react.PropTypes.bool
        },
        enumerable: true
    }, {
        key: 'contextTypes',
        value: {
            padding: _react.PropTypes.number.isRequired,
            outerPadding: _react.PropTypes.number.isRequired
        },
        enumerable: true
    }]);

    var _Lines = Lines;
    Lines = _reactMixin.decorate(_MixinsBucketData2['default'])(Lines) || Lines;
    return Lines;
})(_react.Component);

exports['default'] = Lines;
module.exports = exports['default'];