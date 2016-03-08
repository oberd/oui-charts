

import React from 'react';
import AbstractExample from './AbstractExample';
import { Chart, Gauge } from '../../../dist/Charts';

class GaugeExample extends AbstractExample {
    renderChart() {
        return (
            <div>
                <Chart width="100%" height="400">
                    <Gauge value={this.state.value} />
                </Chart>
                <input type="range" min={0} max={100} step={5} value={this.state.value} onChange={this.changeValue.bind(this)}/>
            </div>
        );
    }
    changeValue(e) {
        this.setState({ value: parseFloat(e.target.value) });
    }
    state = {
        value: 80
    };
}

export default GaugeExample;
