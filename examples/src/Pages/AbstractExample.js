
import React, { Component } from 'react';
import Example from '../Components/Example';
import Chance from 'chance';
const chance = new Chance('hi');

let data = [
    { one: 1, two: 5, three: 6, four: 8 },
    { one: 3, two: 4, three: 9, four: 9 },
    { one: 2, two: 7, three: 12, four: 10 },
    { one: 2, two: 7, three: 12, four: null }
];

let data2 = [
    { one: 1, two: 5 }
];

class AbstractExample extends Component {
    renderChart() {
        return <div />;
    }
    render() {
        return (
            <Example title={this.title} onRandomize={this.handleRandomize.bind(this)}>
                {this.renderChart()}
            </Example>
        );
    }
    state = { data: data, data2: data2, standardDeviation: false };
    generateData() {
        const count = Math.ceil(Math.random() * 10);
        const keyCount = Math.ceil(Math.random() * 5);
        const maxVal = Math.random() * 40 + 10;
        const minVal = 0;
        const newData = [];
        let newObj;
        for (let i = 0; i < count; i++) {
            newObj = { _label: chance.word() };
            for (let j = 0; j < keyCount; j++) {
                newObj[j] = Math.random() * maxVal + minVal;
            }
            newData.push(newObj);
        }
        return { data: newData };
    }
    handleRandomize() {
        this.setState(this.generateData());
    }
}
export default AbstractExample;
