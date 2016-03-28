
import React from 'react';
import AbstractExample from './AbstractExample';
import { Chart, Bars, Lines, Legend, BucketX as Axis, TickMarks } from '../../../dist/Charts';

class TickMarksExample extends AbstractExample {
    renderChart() {
        return (
            <div>
                <Chart width="100%" height="400" tickMarks>
                    <Bars data={this.state.data} />
                    <Lines data={this.state.data} average />
                    <TickMarks data={this.state.data} />
                    <Axis data={this.state.data} />
                </Chart>
                <Legend data={this.state.data} />
            </div>
        );
    }
}

export default TickMarksExample;
