'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMixin = require('react-mixin');

var _MixinsBucketData = require('../Mixins/BucketData');

var _MixinsBucketData2 = _interopRequireDefault(_MixinsBucketData);

var _PrimitivesRect = require('../Primitives/Rect');

var _PrimitivesRect2 = _interopRequireDefault(_PrimitivesRect);

var _PrimitivesText = require('../Primitives/Text');

var _PrimitivesText2 = _interopRequireDefault(_PrimitivesText);

var BucketX = (function (_Component) {
    _inherits(BucketX, _Component);

    function BucketX() {
        _classCallCheck(this, _BucketX);

        _Component.apply(this, arguments);
    }

    BucketX.prototype.render = function render() {
        var p = this.percent;
        var validBuckets = this.getValidBuckets();
        var bucketScale = this.getBucketScale();
        var bucketWidth = bucketScale.rangeBand();
        var yExtents = this.buildYExtents();
        var centerOffset = bucketWidth / 2;
        var textY = yExtents[1] + (100 - yExtents[1]) / 2;
        return _react2['default'].createElement(
            'g',
            null,
            bucketScale.range().map(function (startX, i) {
                return _react2['default'].createElement(
                    'g',
                    { key: i },
                    _react2['default'].createElement(_PrimitivesRect2['default'], { x: p(startX), width: p(bucketWidth), height: 3,
                        y: p(yExtents[1]), fill: 'currentColor' }),
                    _react2['default'].createElement(
                        _PrimitivesText2['default'],
                        { x: p(startX + centerOffset), y: p(textY),
                            textAnchor: 'middle' },
                        validBuckets[i]._label || i
                    )
                );
            })
        );
    };

    _createClass(BucketX, null, [{
        key: 'contextTypes',
        value: {
            padding: _react.PropTypes.number.isRequired,
            outerPadding: _react.PropTypes.number.isRequired
        },
        enumerable: true
    }]);

    var _BucketX = BucketX;
    BucketX = _reactMixin.decorate(_MixinsBucketData2['default'])(BucketX) || BucketX;
    return BucketX;
})(_react.Component);

exports['default'] = BucketX;
module.exports = exports['default'];