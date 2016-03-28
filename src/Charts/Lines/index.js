import d3 from 'd3';
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import BucketData from '../Mixins/BucketData';
import Line from '../Primitives/Line';
import Circle from '../Primitives/Circle';

class Lines extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        average: PropTypes.bool,
        strokeWidth: PropTypes.number
    };
    getPointX() {
        const range = this.getBucketScale();
        const offset = range.rangeBand() / 2;
        return function(index) {
            return range(index) + offset;
        };
    }
    getPointY() {
        const vals = this.getValues();
        const yExtents = this.buildYExtents();
        const y = d3.scale.linear().clamp(true)
            .domain(this.paddedExtent(vals))
            .range(yExtents.reverse());
        return y;
    }
    renderPoint(bucketIndex, seriesIndex, value, prevValue = null) {
        let out = [];
        const p = this.percent;
        const x = this.getPointX();
        const y = this.getPointY();
        const color = this.getColorScale();
        const circleKey = `${bucketIndex}_${seriesIndex}`;
        out.push((
            <Circle key={circleKey}
                cx={p(x(bucketIndex))}
                cy={p(y(value))}
                r="10"
                fill={color(seriesIndex)}
            />
        ));
        if (prevValue !== null) {
            const lineKey = `line_${bucketIndex}_${seriesIndex}`;
            out.push((
                <Line key={lineKey}
                    x1={p(x(bucketIndex - 1))}
                    x2={p(x(bucketIndex))}
                    y1={p(y(prevValue))}
                    y2={p(y(value))}
                    stroke={color(seriesIndex)}
                    style={{ strokeWidth: this.props.strokeWidth }}
                />
            ));
        }
        return out;
    }
    renderLines() {
        let out = [];
        const valueKeys = this.getValueKeys();
        const avg = this.getBucketAverage;
        const { average } = this.props;
        let prevBucket = null;
        this.getValidBuckets().map((bucket, i) => {
            if (average) {
                const prevValue = prevBucket ? avg(prevBucket) : null;
                out = out.concat(this.renderPoint(i, valueKeys.length, avg(bucket), prevValue));
            } else {
                valueKeys.forEach((key, j) => {
                    const prevValue = prevBucket ? prevBucket[key] : null;
                    out = out.concat(this.renderPoint(i, j, bucket[key], prevValue));
                });
            }
            prevBucket = bucket;
        });
        return out;
    }
    render() {
        return (
            <g>
                {this.renderLines()}
            </g>
        );
    }
    static defaultProps = {
        strokeWidth: 3
    };
    static contextTypes = {
        padding: PropTypes.number.isRequired,
        outerPadding: PropTypes.number.isRequired,
        tickMarks: PropTypes.bool
    }
}

reactMixin.onClass(Lines, BucketData);

export default Lines;
