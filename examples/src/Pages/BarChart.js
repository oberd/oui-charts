

import React from 'react';
import AbstractExample from './AbstractExample';
import Chart from '../../../lib/Charts/Chart';
import Bars from '../../../lib/Charts/Bars';
import Legend from '../../../lib/Charts/Legend';
import Axis from '../../../lib/Charts/Axis/BucketX';

export default class BarChart extends AbstractExample {
    renderChart() {
        return (
            <div>
                <Chart width="100%" height="400">
                    <Bars data={this.state.data} />
                    <Axis data={this.state.data} />
                </Chart>
                <Legend data={this.state.data} />
            </div>
        );
    }
}
