
import React, { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import AnimatedPrimitive from '../Mixins/AnimatedPrimitive';
import { omit } from 'underscore';

class Text extends Component {
    static propTypes = {
        animationDuration: PropTypes.number,
        animationDelay: PropTypes.number,
        dy: PropTypes.string
    }
    render() {
        const okProps = omit(this.props, ['animationDuration', 'animationDelay', 'hoverKey', 'hoverData']);
        return (
            <text {...okProps} />
        );
    }
    static defaultProps = {
        animationDuration: 1000,
        animationDelay: 0,
        fill: 'currentColor',
        textAnchor: 'middle',
        dy: '0'
    }
}

reactMixin.onClass(Text, AnimatedPrimitive);

export default Text;
