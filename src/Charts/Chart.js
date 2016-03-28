
import React, { Component, PropTypes } from 'react';
import { Size, Children } from '../PropTypes';
import Hover from './Hover';
import styles from './Chart.css';

class Chart extends Component {
    static propTypes = {
        width: Size,
        height: Size,
        padding: PropTypes.number,
        outerPadding: PropTypes.number,
        children: Children,
        tickMarks: PropTypes.bool,
        hover: PropTypes.oneOfType([PropTypes.bool, PropTypes.func ])
    };
    onClick() {
        this.setState({ hover: false, activeElement: false });
    }
    getChildContext() {
        const { padding, outerPadding, tickMarks } = this.props;
        return {
            padding,
            outerPadding,
            setHoverData: this.setHoverState.bind(this),
            setActiveElement: this.setActiveElement.bind(this),
            hasActiveElement: this.hasActiveElement.bind(this),
            isActiveElement: this.hasActiveElement.bind(this),
            activeElement: this.state.activeElement,
            tickMarks
        };
    }
    renderHover() {
        let out = undefined;
        if (this.props.hover && this.state.hover) {
            out = <div><Hover {...this.state.hover} /></div>;
        }
        return out;
    }
    render() {
        const { width, height, children } = this.props;
        const hover = this.renderHover();
        return (
            <div className={styles['oui-chart']}>
                <svg width={width} height={height} onClick={this.onClick.bind(this)}>
                    {children}
                </svg>
                {hover}
            </div>
        );
    }
    setHoverState(data) {
        if (!this.state.activeElement) {
            this.setState({ hover: data });
        }
    }
    setActiveElement(hoverKey, data) {
        this.setState({ hover: data, activeElement: hoverKey });
    }
    hasActiveElement() {
        return !!this.state.activeElement;
    }
    state = { hover: false, activeElement: false };
    static defaultProps = {
        padding: 0.1,
        outerPadding: 0.1,
        width: '100%',
        height: 400,
        tickMarks: false
    }
    static childContextTypes = {
        padding: PropTypes.number,
        outerPadding: PropTypes.number,
        setHoverData: PropTypes.func,
        setActiveElement: PropTypes.func,
        hasActiveElement: PropTypes.func,
        isActiveElement: PropTypes.func,
        activeElement: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        tickMarks: PropTypes.bool
    }
}

export default Chart;
