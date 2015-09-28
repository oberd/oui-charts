'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('../../PropTypes');

var _reactMixin = require('react-mixin');

var _MixinsBucketData = require('../Mixins/BucketData');

var _MixinsBucketData2 = _interopRequireDefault(_MixinsBucketData);

var _PrimitivesRect = require('../Primitives/Rect');

var _PrimitivesRect2 = _interopRequireDefault(_PrimitivesRect);

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

var Bars = (function (_Component) {
    _inherits(Bars, _Component);

    function Bars() {
        _classCallCheck(this, _Bars);

        _Component.apply(this, arguments);
    }

    Bars.prototype.renderBars = function renderBars() {
        var bars = [];
        var p = this.percent;
        var _context = this.context;
        var outerPadding = _context.outerPadding;
        var padding = _context.padding;

        var validBuckets = this.getValidBuckets();
        var valueKeys = Object.keys(validBuckets[0]).filter(function (key) {
            return key !== '_label';
        });
        var facetCount = valueKeys.length;
        var bucketX = this.getBucketScale();
        var bucketSize = bucketX.rangeBand();
        var vals = this.getValues();

        var _buildVerticalScales = this.buildVerticalScales();

        var ht = _buildVerticalScales.ht;
        var y = _buildVerticalScales.y;

        var color = _d32['default'].scale.category20().domain(_d32['default'].range(facetCount));
        validBuckets.forEach(function (bucket, i) {
            var currentBucketX = bucketX(i);
            var barX = _d32['default'].scale.ordinal().domain(_d32['default'].range(facetCount)).rangeBands([currentBucketX, currentBucketX + bucketSize], padding, outerPadding);
            var barWidth = barX.rangeBand();
            valueKeys.forEach(function (key, j) {
                var barKey = key + '_' + i;
                var animationOffset = 750 / vals.length;
                bars.push(_react2['default'].createElement(_PrimitivesRect2['default'], { key: barKey,
                    x: p(barX(j)),
                    width: p(barWidth),
                    height: p(ht(bucket[key])),
                    y: p(y(bucket[key])),
                    fill: color(j),
                    animationDuration: 750,
                    animationDelay: bars.length * animationOffset
                }));
            });
        });
        return bars;
    };

    Bars.prototype.render = function render() {
        var p = this.percent;
        var contentHeight = 100 - 50 * (this.context.padding + this.context.outerPadding);
        return _react2['default'].createElement(
            'g',
            null,
            _react2['default'].createElement(
                'clipPath',
                { id: 'bars-mask' },
                _react2['default'].createElement('rect', { x: '0', y: '0', width: '100%', height: p(contentHeight) })
            ),
            _react2['default'].createElement(
                'g',
                { clipPath: 'url(#bars-mask)' },
                this.renderBars()
            )
        );
    };

    Bars.prototype.buildVerticalScales = function buildVerticalScales() {
        var vals = this.getValues();
        var yExtents = this.buildYExtents();
        var ht = _d32['default'].scale.linear().domain(this.paddedExtent(vals)).clamp(true).range(yExtents);
        var y = ht.copy().range(yExtents.reverse());
        return { ht: ht, y: y };
    };

    _createClass(Bars, null, [{
        key: 'propTypes',
        value: {
            width: _PropTypes.Size,
            height: _PropTypes.Size,
            data: _react.PropTypes.array.isRequired
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

    var _Bars = Bars;
    Bars = _reactMixin.decorate(_MixinsBucketData2['default'])(Bars) || Bars;
    return Bars;
})(_react.Component);

exports['default'] = Bars;
module.exports = exports['default'];