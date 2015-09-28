

import React from 'react';
import AbstractExample from './AbstractExample';
import Chart from '../../../lib/Charts/Chart';
import Lines from '../../../lib/Charts/Lines';
import Legend from '../../../lib/Charts/Legend';
import Axis from '../../../lib/Charts/Axis/BucketX';

export default class LineChart extends AbstractExample {
    renderChart() {
        return (
            <div>
                <Chart width="100%" height="400">
                    <Lines data={this.state.data} />
                    <Axis data={this.state.data} />
                </Chart>
                <Legend data={this.state.data} />
            </div>
        );
    }
}
