
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import AnimatedPrimitive from '../Mixins/AnimatedPrimitive';
import Hoverable from '../Mixins/Hoverable';
import { omit } from 'underscore';

class Line extends Component {
    static propTypes = {
        animationDuration: PropTypes.number,
        animationDelay: PropTypes.number
    };
    render() {
        const props = { ...this.props, opacity: this.getOpacity() };
        const okProps = omit(props, ['animationDuration', 'animationDelay', 'hoverKey', 'hoverData']);
        return (
            <line {...this.hoverableEvents()} {...okProps} />
        );
    }
    static defaultProps = {
        animationDuration: 1000,
        animationDelay: 0
    }
    static contextTypes = {
        setHoverData: PropTypes.func,
        setActiveElement: PropTypes.func,
        hasActiveElement: PropTypes.func
    };
}

reactMixin.onClass(Line, AnimatedPrimitive);
reactMixin.onClass(Line, Hoverable);

export default Line;
