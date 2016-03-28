
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import BucketData from '../Mixins/BucketData';
import Line from '../Primitives/Line';
import Text from '../Primitives/Text';

class TickMarks extends Component {
    render() {
        const p = this.percent;
        const xExtents = this.buildXExtents();
        let ticks = this.getTickMarks();
        ticks = ticks.filter(tick => tick.y > 5 && tick.y < 95);
        return (
            <g>
                {ticks.map((tick, i) => (
                    <g key={i}>
                        <Line
                            x1={p(xExtents[0])}
                            y1={p(tick.y)}
                            x2={p(100)}
                            y2={p(tick.y)}
                            strokeLinecap="round"
                            strokeDasharray="1, 10"
                            stroke="currentColor"
                            style={{ opacity: 0.5, strokeWidth: 1 }} />
                        <Text dy="0.3em" x={p(5)} y={p(tick.y)} textAnchor="middle">
                            {tick.label}
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

reactMixin.onClass(TickMarks, BucketData);

export default TickMarks;
