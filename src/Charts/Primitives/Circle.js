
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import AnimatedPrimitive from '../Mixins/AnimatedPrimitive';

class Circle extends Component {
    static propTypes = {
        animationDuration: PropTypes.number,
        animationDelay: PropTypes.number
    };
    render() {
        return (
            <circle {...this.props} />
        );
    }
    static defaultProps = {
        animationDuration: 1000,
        animationDelay: 0
    }
}

reactMixin.onClass(Circle, AnimatedPrimitive);

export default Circle;
