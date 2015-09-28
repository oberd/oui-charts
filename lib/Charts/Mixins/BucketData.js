'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

var _underscore = require('underscore');

var bucketData = {
    getValidBuckets: function getValidBuckets() {
        var validBuckets = _underscore.filter(this.props.data, function (bucket) {
            return _underscore.some(bucket, function (val, key) {
                return val !== null && key !== '_label';
            });
        });
        return validBuckets;
    },
    getValues: function getValues() {
        var validBuckets = this.getValidBuckets();
        var valueBuckets = validBuckets.map(function (bucket) {
            return _underscore.omit(bucket, '_label');
        });
        return _underscore.filter(_underscore.flatten(valueBuckets.map(_underscore.values)), function (val) {
            return val !== null;
        });
    },
    getValueKeys: function getValueKeys() {
        var validBuckets = this.getValidBuckets();
        return Object.keys(validBuckets[0]).filter(function (key) {
            return key !== '_label';
        });
    },
    getBucketScale: function getBucketScale() {
        var validBuckets = this.getValidBuckets();
        var bucketCount = validBuckets.length;
        var _context = this.context;
        var outerPadding = _context.outerPadding;
        var padding = _context.padding;

        return _d32['default'].scale.ordinal().domain(_d32['default'].range(bucketCount)).rangeBands([0, 100], padding, outerPadding);
    },
    buildYExtents: function buildYExtents() {
        var _context2 = this.context;
        var padding = _context2.padding;
        var outerPadding = _context2.outerPadding;

        var heightBand = _d32['default'].scale.ordinal().domain([0, 1]).rangeBands([0, 100], padding, outerPadding);
        var totalHeight = heightBand.rangeBand();

        var _heightBand$range = heightBand.range();

        var minY = _heightBand$range[0];
        var maxY = _heightBand$range[1];

        return [0, maxY - minY + totalHeight];
    },
    paddedExtent: function paddedExtent(vals) {
        var _d3$extent = _d32['default'].extent(vals);

        var min = _d3$extent[0];
        var max = _d3$extent[1];

        var offset = Math.max(0.1, (max - min) * this.context.padding);
        return [min - offset, max + offset];
    },
    percent: function percent(input) {
        return input.toString() + '%';
    },
    getColorScale: function getColorScale() {
        var valueKeys = this.getValueKeys();
        return _d32['default'].scale.category20().domain(_d32['default'].range(valueKeys.length));
    },
    getBucketAverage: function getBucketAverage(bucket) {
        var vals = _underscore.values(_underscore.omit(bucket, '_label'));
        return _d32['default'].mean(vals);
    }
};

exports['default'] = bucketData;
module.exports = exports['default'];