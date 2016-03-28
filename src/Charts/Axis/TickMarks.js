
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import BucketData from '../Mixins/BucketData';
import Rect from '../Primitives/Rect';
import Text from '../Primitives/Text';
import { min, max } from 'underscore';

class TickMarks extends Component {
    render() {
        const p = this.percent;
        const startX = this.buildXExtents()[0];
        const ticks = this.getTickMarks();
        const minTickY = min(ticks, tick => tick.y ).y;
        const maxTickY = max(ticks, tick => tick.y ).y;
        return (
            <g>
                <Rect x={p(startX)} width="2" height={p(maxTickY - minTickY)}
                    y={p(minTickY)} fill="currentColor"/>
                {ticks.map((tick, i) => (
                    <Text key={i} dy="0.3em" x={p(5)} y={p(tick.y)} textAnchor="middle">
                        {tick.label}
                    </Text>
                ))}
            </g>
        );
    }
    static contextTypes = {
        padding: PropTypes.number.isRequired,
        outerPadding: PropTypes.number.isRequired
    }
}

reactMixin.onClass(TickMarks, BucketData);

export default TickMarks;
