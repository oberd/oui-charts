
import React, { Component, PropTypes } from 'react';
import { decorate as mixin } from 'react-mixin';
import BucketData from '../Mixins/BucketData';
import Rect from '../Primitives/Rect';
import Text from '../Primitives/Text';


@mixin(BucketData)
class BucketX extends Component {
    render() {
        const p = this.percent;
        const validBuckets = this.getValidBuckets();
        const bucketScale = this.getBucketScale();
        const bucketWidth = bucketScale.rangeBand();
        const yExtents = this.buildYExtents();
        const centerOffset = bucketWidth / 2;
        const textY = yExtents[1] + (100 - yExtents[1]) / 2;
        return (
            <g>
            {bucketScale.range().map((startX, i) => (
                <g key={i}>
                    <Rect x={p(startX)} width={p(bucketWidth)} height={3}
                        y={p(yExtents[1])} fill="currentColor"/>
                    <Text x={p(startX + centerOffset)} y={p(textY)}
                        textAnchor="middle">
                        {validBuckets[i]._label || i}
                    </Text>
                </g>
            ))}
            </g>
        );
    }
    static contextTypes = {
        padding: PropTypes.number.isRequired,
        outerPadding: PropTypes.number.isRequired
    }
}

export default BucketX;
