

import React from 'react';
import AbstractExample from './AbstractExample';
import { Chart, Bars, Legend, BucketX as Axis } from '../../../dist/Charts';
import Chance from 'chance';
const chance = new Chance('hi');

class BarChart extends AbstractExample {
    generateData() {
        const withDeviation = Math.random() > 0.5;
        const count = Math.ceil(Math.random() * 10);
        const keyCount = Math.ceil(Math.random() * 5);
        const maxVal = Math.random() * 40 + 10;
        const minVal = 0;
        const newData = [];
        const newDeviation = [];
        let newObj;
        let newDev;
        for (let i = 0; i < count; i++) {
            newObj = { _label: chance.word() };
            newDev = { _label: chance.word() };
            for (let j = 0; j < keyCount; j++) {
                if (withDeviation) {
                    newObj[j] = Math.random() * maxVal + minVal;
                } else {
                    newObj[j] = Math.random() * maxVal + minVal;
                    newDev[j] = newObj[j] * 0.2;
                    newDeviation.push(newDev);
                }
            }
            newData.push(newObj);
        }
        return { data: newData, standardDeviation: newDeviation.length ? newDeviation : false };
    }
    renderChart() {
        return (
            <div>
                <Chart width="100%" height="400" hover>
                    <Bars data={this.state.data} standardDeviation={this.state.standardDeviation} />
                    <Axis data={this.state.data} />
                </Chart>
                <Legend data={this.state.data} />
            </div>
        );
    }
}

export default BarChart;
