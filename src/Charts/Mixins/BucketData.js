
import d3 from 'd3';
import { values, flatten, filter, some, omit } from 'underscore';

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
    getColorScale(data) {
        let dt = data || this.props.data;
        const valueKeys = this.getValueKeys(dt);
        return d3.scale.category20().domain(d3.range(valueKeys.length));
    },
    getBucketAverage(bucket) {
        const vals = values(omit(bucket, (val, key) => key.match(/^_/)));
        return d3.mean(vals);
    }
};

export default bucketData;
