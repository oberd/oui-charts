
import d3 from 'd3';
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import reactMixin from 'react-mixin';
import AnimatedPrimitive from '../Mixins/AnimatedPrimitive';
import Hoverable from '../Mixins/Hoverable';

class Rect extends Component {
    static propTypes = {
        animationDuration: PropTypes.number,
        animationDelay: PropTypes.number
    }
    componentDidMount() {
        const { animationDuration, animationDelay } = this.props;
        if (animationDuration) {
            const $el = d3.select(findDOMNode(this));
            const initialY = $el.attr('y');
            $el.interrupt()
                .transition()
                .attr('y', '100%')
                .duration(animationDuration)
                .delay(animationDelay)
                .attr('y', initialY);
        }
    }
    render() {
        const props = { ...this.props, opacity: this.getOpacity() };
        return (
            <rect {...this.hoverableEvents()} {...props} />
        );
    }
    static defaultProps = {
        animationDuration: 1000,
        animationDelay: 0
    }
    static contextTypes = {
        setHoverData: PropTypes.func,
        setActiveElement: PropTypes.func,
        hasActiveElement: PropTypes.func,
        activeElement: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    };
}

reactMixin.onClass(Rect, AnimatedPrimitive);
reactMixin.onClass(Rect, Hoverable);

export default Rect;
