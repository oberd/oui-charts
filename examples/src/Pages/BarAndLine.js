
import React from 'react';
import AbstractExample from './AbstractExample';
import Chart from '../../../lib/Charts/Chart';
import Bars from '../../../lib/Charts/Bars';
import Lines from '../../../lib/Charts/Lines';
import Legend from '../../../lib/Charts/Legend';
import Axis from '../../../lib/Charts/Axis/BucketX';

export default class BarAndLine extends AbstractExample {
    renderChart() {
        return (
            <div>
                <Chart width="100%" height="400">
                    <Bars data={this.state.data} />
                    <Lines data={this.state.data} average />
                    <Axis data={this.state.data} />
                </Chart>
                <Legend data={this.state.data} />
            </div>
        );
    }
}
