
import { expect } from 'chai';
import React, { Component } from 'react';
import Chart from '../../src/Charts/Chart';

import { createRenderer } from 'react-addons-test-utils';

describe('Bars', () => {
    function getOutput(jsx) {
        const renderer = createRenderer();
        renderer.render(jsx);
        return renderer.getRenderOutput();
    }
    it('should be a component, of course', () => {
        expect(new Chart()).to.be.an.instanceof(Component);
    });
    it('should render svg', () => {
        expect(getOutput(<Chart />).type).to.equal('svg');
    });
    it('should set width and height, and append children', () => {
        expect(getOutput(<Chart width="10%" height={10}><g/></Chart>))
            .to.eql(<svg width="10%" height={10}><g/></svg>);
    });
});
