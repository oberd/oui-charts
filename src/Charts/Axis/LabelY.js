
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import BucketData from '../Mixins/BucketData';
import Text from '../Primitives/Text';

class LabelY extends Component {
    static propTypes = {
        label: PropTypes.string
    };
    render() {
        const p = this.percent;
        const yExtents = this.buildYExtents();
        const xExtents = this.buildXExtents();
        const y = (yExtents[1] - yExtents[0]) / 2;
        return (
            <g style={{ transform: 'rotate(-90deg)' }}>
                <Text textAnchor="middle" x={p(xExtents[0])} y={p(y)} dx="20">
                    {this.props.label}
                </Text>
            </g>
        );
    }
    static contextTypes = {
        padding: PropTypes.number.isRequired,
        outerPadding: PropTypes.number.isRequired,
        tickMarks: PropTypes.bool.isRequired
    }
}

reactMixin.onClass(LabelY, BucketData);

export default LabelY;
