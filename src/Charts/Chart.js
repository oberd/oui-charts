
import React, { Component, PropTypes } from 'react';
import { Size, Children } from '../PropTypes';

export default class Chart extends Component {
    static propTypes = {
        width: Size,
        height: Size,
        padding: PropTypes.number,
        outerPadding: PropTypes.number,
        children: Children
    };
    getChildContext() {
        const { padding, outerPadding } = this.props;
        return { padding, outerPadding };
    }
    render() {
        const { width, height, children } = this.props;
        return (
            <svg width={width} height={height}>
                {children}
            </svg>
        );
    }
    static defaultProps = {
        padding: 0.1,
        outerPadding: 0.1,
        width: '100%',
        height: 400
    }
    static childContextTypes = {
        padding: PropTypes.number,
        outerPadding: PropTypes.number
    }
}
