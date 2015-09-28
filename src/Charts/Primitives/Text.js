
import React, { Component, PropTypes } from 'react';
import { decorate as mixin } from 'react-mixin';
import AnimatedPrimitive from '../Mixins/AnimatedPrimitive';

@mixin(AnimatedPrimitive)
export default class Rect extends Component {
    static propTypes = {
        animationDuration: PropTypes.number,
        animationDelay: PropTypes.number
    }
    render() {
        return (
            <text {...this.props} />
        );
    }
    static defaultProps = {
        animationDuration: 1000,
        animationDelay: 0,
        fill: 'currentColor',
        textAnchor: 'middle'
    }
}
