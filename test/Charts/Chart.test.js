
import { expect } from 'chai';
import React, { Component } from 'react';
import { Chart } from '../../dist/Charts';
import { compact } from 'underscore';

import { createRenderer } from 'react-addons-test-utils';

describe('Chart', () => {
    function getOutput(jsx) {
        const renderer = createRenderer();
        renderer.render(jsx);
        return renderer.getRenderOutput();
    }
    it('should be a component, of course', () => {
        expect(new Chart()).to.be.an.instanceof(Component);
    });
    it('should render div container with single svg child', () => {
        const out = getOutput(<Chart />);
        expect(out.type).to.eql('div');
        expect(compact(out.props.children)).to.have.length(1);
        expect(out.props.children[0].type).to.eql('svg');
    });
    it('should set width and height, and append children', () => {
        const out = getOutput(<Chart width="10%" height={10}><g/></Chart>);
        expect(out.props.children[0].type).to.eql('svg');
        expect(out.props.children[0].props.width).to.eql('10%');
        expect(out.props.children[0].props.height).to.eql(10);
        expect(out.props.children[0].props.onClick).to.be.a('function');
    });
});
