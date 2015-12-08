
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import AnimatedPrimitive from '../Mixins/AnimatedPrimitive';

class Text extends Component {
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

reactMixin.onClass(Text, AnimatedPrimitive);

export default Text;
