
import d3 from 'd3';
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { decorate as mixin } from 'react-mixin';
import AnimatedPrimitive from '../Mixins/AnimatedPrimitive';

@mixin(AnimatedPrimitive)
export default class Rect extends Component {
    static propTypes = {
        animationDuration: PropTypes.number,
        animationDelay: PropTypes.number
    }
    componentDidMount() {
        const { animationDuration, animationDelay } = this.props;
        if (animationDuration) {
            const $el = d3.select(findDOMNode(this));
            const initialY = $el.attr('y');
            $el.attr('y', '100%')
                .transition()
                .duration(animationDuration)
                .delay(animationDelay)
                .attr('y', initialY);
        }
    }
    render() {
        return (
            <rect {...this.props} />
        );
    }
    static defaultProps = {
        animationDuration: 1000,
        animationDelay: 0
    }
}
