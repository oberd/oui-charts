
import { expect } from 'chai';
import { Component } from 'react';
import { Bars } from '../dist/Charts';

describe('Charts Container', () => {
    it('should export Bars', () => {
        expect(new Bars()).to.be.an.instanceof(Component);
    });
});
