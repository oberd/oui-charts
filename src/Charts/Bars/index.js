

import React, { Component, PropTypes } from 'react';
import { Size } from '../../PropTypes';
import { decorate as mixin } from 'react-mixin';
import BucketData from '../Mixins/BucketData';
import Rect from '../Primitives/Rect';

import d3 from 'd3';

@mixin(BucketData)
class Bars extends Component {
    static propTypes = {
        width: Size,
        height: Size,
        data: PropTypes.array.isRequired
    };
    renderBars() {
        let bars = [];
        const p = this.percent;
        const { outerPadding, padding } = this.context;
        const validBuckets = this.getValidBuckets();
        const valueKeys = Object.keys(validBuckets[0]).filter(key => key !== '_label');
        const facetCount = valueKeys.length;
        const bucketX = this.getBucketScale();
        const bucketSize = bucketX.rangeBand();
        const vals = this.getValues();
        const { ht, y } = this.buildVerticalScales();
        const color = d3.scale.category20().domain(d3.range(facetCount));
        validBuckets.forEach((bucket, i) => {
            const currentBucketX = bucketX(i);
            const barX = d3.scale.ordinal()
                .domain(d3.range(facetCount))
                .rangeBands([currentBucketX, currentBucketX + bucketSize], padding, outerPadding);
            const barWidth = barX.rangeBand();
            valueKeys.forEach((key, j) => {
                const barKey = `${key}_${i}`;
                const animationOffset = 750 / vals.length;
                bars.push((
                    <Rect key={barKey}
                        x={p(barX(j))}
                        width={p(barWidth)}
                        height={p(ht(bucket[key]))}
                        y={p(y(bucket[key]))}
                        fill={color(j)}
                        animationDuration={750}
                        animationDelay={bars.length * animationOffset}
                        />
                ));
            });
        });
        return bars;
    }
    render() {
        const p = this.percent;
        const contentHeight = 100 - 50 * (this.context.padding + this.context.outerPadding);
        return (
            <g>
                <clipPath id="bars-mask">
                    <rect x="0" y="0" width="100%" height={p(contentHeight)} />
                </clipPath>
                <g clipPath="url(#bars-mask)">
                    {this.renderBars()}
                </g>
            </g>
        );
    }
    buildVerticalScales() {
        const vals = this.getValues();
        const yExtents = this.buildYExtents();
        const ht = d3.scale.linear().domain(this.paddedExtent(vals)).clamp(true)
            .range(yExtents);
        const y = ht.copy().range(yExtents.reverse());
        return { ht, y };
    }
    static contextTypes = {
        padding: PropTypes.number.isRequired,
        outerPadding: PropTypes.number.isRequired
    }
}

export default Bars;
