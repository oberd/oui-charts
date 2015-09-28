

import React from 'react';
import AbstractExample from './AbstractExample';
import { Chart, Lines, Legend, BucketX as Axis } from '../../../dist/Charts';

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
