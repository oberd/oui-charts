
import d3 from 'd3';
import common from './Styles.css';
import legend from './Legend.css';
import React, { Component, PropTypes } from 'react';

export default class Legend extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    };
    getColorScale() {
        if (this.props.data.length) {
            const valKeys = Object.keys(this.props.data[0]).filter(key => key !== '_label');
            const color = d3.scale.category20().domain(d3.range(valKeys.length));
            return valKeys.map((key, i) => {
                return { label: key, color: color(i) };
            });
        }
    }
    render() {
        const colorScale = this.getColorScale();
        const cls = [common['flex-row'], legend.legend].join(' ');
        return (
            <div className={common['flex-row']}>
                {colorScale.map((series, i) =>
                    <div className={cls} key={i}>
                        <div className={legend['legend-color']} style={{ backgroundColor: series.color }} />
                        <div className={legend['legend-label'] + ' ' + common.flex}>{series.label}</div>
                    </div>
                )}
            </div>
        );
    }
}
