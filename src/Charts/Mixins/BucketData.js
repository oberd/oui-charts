
import d3 from 'd3';
import { PropTypes } from 'react';
import { values, flatten, filter, some, omit, min, max } from 'underscore';

const bucketData = {
    getValidBuckets(data) {
        let dt = data || this.props.data;
        const validBuckets = filter(dt, bucket =>
            some(bucket, (val, key) => val !== null && !key.match(/^_/))
        );
        return validBuckets;
    },
    getValues(data) {
        let dt = data || this.props.data;
        const validBuckets = this.getValidBuckets(dt);
        let valueBuckets = validBuckets.map(bucket => {
            let out = {};
            Object.keys(bucket)
                .filter(k => !k.match(/^_/))
                .forEach(k => out[k] = bucket[k]);
            return out;
        });
        return filter(flatten(valueBuckets.map(values)), val => val !== null);
    },
    getValueKeys(data) {
        let dt = data || this.props.data;
        const validBuckets = this.getValidBuckets(dt);
        return Object.keys(validBuckets[0]).filter(key => !key.match(/^_/));
    },
    getBucketScale(data) {
        let dt = data || this.props.data;
        const validBuckets = this.getValidBuckets(dt);
        const bucketCount = validBuckets.length;
        const { outerPadding, padding } = this.context;
        return d3.scale.ordinal()
            .domain(d3.range(bucketCount))
            .rangeBands([this.getLeftX(), 100], padding, outerPadding);
    },
    getLeftX() {
        return (this.context.tickMarks || this.props.tickMarks) ? 10 : 0;
    },
    buildXExtents() {
        const { padding, outerPadding } = this.context;
        const widthBand = d3.scale.ordinal().domain([0, 1])
            .rangeBands([this.getLeftX(), 100], padding, outerPadding);
        const totalWidth = widthBand.rangeBand();
        let [minX, maxX] = widthBand.range();
        return [this.getLeftX(), maxX - minX + totalWidth ];
    },
    buildYExtents() {
        const { padding, outerPadding } = this.context;
        const heightBand = d3.scale.ordinal().domain([0, 1])
            .rangeBands([0, 100], padding, outerPadding);
        const totalHeight = heightBand.rangeBand();
        let [minY, maxY] = heightBand.range();
        return [0, maxY - minY + totalHeight ];
    },
    paddedExtent(vals) {
        const [minVal, maxVal] = d3.extent(vals);
        const offset = Math.max(0.1, (maxVal - minVal) * this.context.padding);
        return [minVal - offset, maxVal + offset];
    },
    percent(input) {
        return input.toString() + '%';
    },
    getColorScale(data) {
        let dt = data || this.props.data;
        const valueKeys = this.getValueKeys(dt);
        return d3.scale.category20().domain(d3.range(valueKeys.length));
    },
    getBucketAverage(bucket) {
        const vals = values(omit(bucket, (val, key) => key.match(/^_/)));
        return d3.mean(vals);
    },
    buildVerticalScales(tickCount = 4) {
        const vals = this.getValues();
        const yExtents = this.buildYExtents();
        const ht = d3.scale.linear().domain(this.paddedExtent(vals))
            .clamp(true)
            .range(yExtents)
            .nice(tickCount);
        const y = ht.copy().range(yExtents.reverse());
        return { ht, y };
    },
    getValueExtents() {
        const vals = this.getValues();
        return [min(vals), max(vals)];
    },
    getVerticalExtents() {
        const { y } = this.buildVerticalScales();
        const [ minVal, maxVal ] = this.getValueExtents();
        return [ y(maxVal), y(minVal) ];
    },
    getTickMarks(tickCount = 4) {
        const format = d3.format('.2f');
        const { y } = this.buildVerticalScales();
        return y.ticks(tickCount).map((val) => {
            return {
                value: val,
                label: format(val),
                y: y(val)
            };
        });
    },
    contextTypes: {
        padding: PropTypes.number.isRequired,
        outerPadding: PropTypes.number.isRequired,
        tickMarks: PropTypes.bool
    }
};

export default bucketData;
