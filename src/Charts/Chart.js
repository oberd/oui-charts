
import React, { Component, PropTypes } from 'react';
import { Size, Children } from '../PropTypes';
import Measure from 'react-measure';
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
        hover: PropTypes.oneOfType([PropTypes.bool, PropTypes.func ]),
        onClickElement: PropTypes.func
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
            clientWidth: this.state.width,
            clientHeight: this.state.height,
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
        let cls = styles['oui-chart'];
        if (this.props.tickMarks) {
            cls += ' oui-tick-marks';
        }
        return (
            <Measure onMeasure={this.updateDimensions}>
                <div className={cls}>
                    <svg width={width} height={height} onClick={this.onClick.bind(this)}>
                        {children}
                    </svg>
                    {hover}
                </div>
            </Measure>
        );
    }
    setHoverState(data) {
        if (!this.state.activeElement) {
            this.setState({ hover: data });
        }
    }
    setActiveElement(hoverKey, data) {
        this.setState({ hover: data, activeElement: hoverKey });
        if (this.props.onClickElement) {
            this.props.onClickElement(hoverKey, data);
        }
    }
    hasActiveElement() {
        return !!this.state.activeElement;
    }
    updateDimensions = dimensions => {
        this.setState({ ...dimensions });
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
        clientWidth: PropTypes.number,
        clientHeight: PropTypes.number,
        tickMarks: PropTypes.bool
    }
}

export default Chart;
