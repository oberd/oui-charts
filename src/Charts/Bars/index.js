

import React, { Component, PropTypes } from 'react';
import { Size } from '../../PropTypes';
import reactMixin from 'react-mixin';
import BucketData from '../Mixins/BucketData';
import Rect from '../Primitives/Rect';
import Line from '../Primitives/Line';
import { number } from '../Utils/Formatters';

import d3 from 'd3';

class Bars extends Component {
    static propTypes = {
        width: Size,
        height: Size,
        data: PropTypes.array.isRequired,
        standardDeviation: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
        numberFormatter: PropTypes.func
    };
    renderBars() {
        let bars = [];
        const p = this.percent;
        const { numberFormatter } = this.props;
        const { outerPadding, padding } = this.context;
        const validBuckets = this.getValidBuckets();
        let deviation = this.props.standardDeviation ? this.getValidBuckets(this.props.standardDeviation) : false;
        const valueKeys = Object.keys(validBuckets[0]).filter(key => !key.match(/^_/));
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
                let hoverData = {
                    label: bucket._label,
                    attributes: {
                        [key]: numberFormatter(bucket[key])
                    }
                };
                if (bucket._meta && bucket._meta[key]) {
                    hoverData.attributes = Object.assign(hoverData.attributes, bucket._meta[key]);
                }
                if (deviation && deviation[i]) {
                    hoverData.attributes['Std. Dev.'] = numberFormatter(deviation[i][key]);
                }
                bars.push((
                    <Rect key={barKey}
                        x={p(barX(j))}
                        width={p(barWidth)}
                        height={p(ht(bucket[key]))}
                        y={p(y(bucket[key]))}
                        fill={color(j)}
                        hoverKey={barKey}
                        hoverData={hoverData}
                        animationDuration={750}
                        animationDelay={bars.length * animationOffset}
                        />
                ));
                if (deviation && deviation[i]) {
                    const devKey = `${barKey}_dev`;
                    bars.push((
                        <Line key={devKey}
                            x1={p(barX(j) + barWidth / 2)}
                            x2={p(barX(j) + barWidth / 2)}
                            y1={p(y(bucket[key]) - ht(deviation[i][key]))}
                            y2={p(y(bucket[key]) + ht(deviation[i][key]))}
                            stroke={color(j)}
                            hoverKey={barKey}
                            hoverData={hoverData}
                            style={{ strokeWidth: 3 }}
                            animationDuration={750}
                            animationDelay={bars.length * animationOffset}
                            />
                    ));
                }
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
    static defaultProps = {
        numberFormatter: number
    };
    static contextTypes = {
        padding: PropTypes.number.isRequired,
        outerPadding: PropTypes.number.isRequired,
        isActiveElement: PropTypes.func
    }
}

reactMixin.onClass(Bars, BucketData);

export default Bars;
