
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import AnimatedPrimitive from '../Mixins/AnimatedPrimitive';
import { omit } from 'underscore';

class Circle extends Component {
    static propTypes = {
        animationDuration: PropTypes.number,
        animationDelay: PropTypes.number
    };
    render() {
        const okProps = omit(this.props, ['animationDuration', 'animationDelay', 'hoverKey', 'hoverData']);
        return (
            <circle {...okProps} />
        );
    }
    static defaultProps = {
        animationDuration: 1000,
        animationDelay: 0
    }
}

reactMixin.onClass(Circle, AnimatedPrimitive);

export default Circle;
