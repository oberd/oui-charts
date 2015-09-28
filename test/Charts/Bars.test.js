
import { expect } from 'chai';
import React, { Component } from 'react';
import { Bars } from '../../dist/Charts';
import { getOutput } from '../helpers';

describe('Bars', () => {
    it('should be a component, of course', () => {
        expect(new Bars()).to.be.an.instanceof(Component);
    });
    it('should render group element', () => {
        expect(getOutput(<Bars data={[{one: 1, two: 2}, {one: 2, two: 3}]} />).type)
            .to.eql('g');
    });
});
