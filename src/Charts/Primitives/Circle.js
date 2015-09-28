
import React, { Component, PropTypes } from 'react';
import { decorate as mixin } from 'react-mixin';
import AnimatedPrimitive from '../Mixins/AnimatedPrimitive';

@mixin(AnimatedPrimitive)
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

export default Circle;
