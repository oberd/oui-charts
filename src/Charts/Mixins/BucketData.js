
import d3 from 'd3';
import { values, flatten, filter, some, omit } from 'underscore';

const bucketData = {
    getValidBuckets() {
        const validBuckets = filter(this.props.data, bucket =>
            some(bucket, (val, key) => val !== null && key !== '_label')
        );
        return validBuckets;
    },
    getValues() {
        const validBuckets = this.getValidBuckets();
        let valueBuckets = validBuckets.map(bucket => omit(bucket, '_label'));
        return filter(flatten(valueBuckets.map(values)), val => val !== null);
    },
    getValueKeys() {
        const validBuckets = this.getValidBuckets();
        return Object.keys(validBuckets[0]).filter(key => key !== '_label');
    },
    getBucketScale() {
        const validBuckets = this.getValidBuckets();
        const bucketCount = validBuckets.length;
        const { outerPadding, padding } = this.context;
        return d3.scale.ordinal()
            .domain(d3.range(bucketCount))
            .rangeBands([0, 100], padding, outerPadding);
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
        const [min, max] = d3.extent(vals);
        const offset = Math.max(0.1, (max - min) * this.context.padding);
        return [min - offset, max + offset];
    },
    percent(input) {
        return input.toString() + '%';
    },
    getColorScale() {
        const valueKeys = this.getValueKeys();
        return d3.scale.category20().domain(d3.range(valueKeys.length));
    },
    getBucketAverage(bucket) {
        const vals = values(omit(bucket, '_label'));
        return d3.mean(vals);
    }
};

export default bucketData;
