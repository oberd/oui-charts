
import React from 'react';
import AbstractExample from './AbstractExample';
import { Chart, Bars, Lines, Legend, BucketX as Axis } from '../../../dist/Charts';

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
