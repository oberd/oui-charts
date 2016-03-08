import React, { Component, PropTypes } from 'react';

class Gauge extends Component {
    static propTypes = {
        value: PropTypes.number,
        min: PropTypes.number,
        max: PropTypes.number,
        tickInterval: PropTypes.number,
        showTicks: PropTypes.bool,
        radius: PropTypes.number,
        style: PropTypes.object
    };
    render() {
        const { value, min, max } = this.props;
        const interp = ((value - min) / (max - min));
        let out;
        if (interp > 0.99) {
            out = this.drawCircle();
        } else {
            out = this.drawPartialCircle();
        }
        return out;
    }
    drawPartialCircle() {
        const { radius, value, min, max } = this.props;
        const interp = ((value - min) / (max - min));
        const rad = interp * 2 * Math.PI;
        const centerX = 100;
        const centerY = 100;
        const startX = centerX;
        const startY = centerY - radius;
        const largeArc = interp > 0.5 ? 1 : 0;
        let x = centerX + (radius * Math.cos(rad - Math.PI / 2));
        let y = centerY + (radius * Math.sin(rad - Math.PI / 2));
        const d = `M${startX} ${startY} A ${radius} ${radius}, 0, ${largeArc}, 1, ${x} ${y}`;
        return (
            <g>
                <path d={d} style={{ fill: 'none', stroke: 'red', strokeWidth: 8 }} />
            </g>
        );
    }
    drawCircle() {
        const { radius, style } = this.props;
        const centerX = 100;
        const centerY = 100;
        return (
            <g>
                <circle cx={centerX} cy={centerY} r={radius} style={style}/>
            </g>
        );
    }
    static defaultProps = {
        radius: 75,
        value: 80,
        min: 0,
        max: 100,
        style: { fill: 'none', stroke: 'red', strokeWidth: 8 }
    };
}

export default Gauge;
