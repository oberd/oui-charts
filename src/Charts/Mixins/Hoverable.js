
const Hoverable = {
    onMouseOver() {
        if (this.context.setHoverData) {
            this.context.setHoverData(this.props.hoverData);
        }
    },
    onMouseOut() {
        if (this.context.setHoverData) {
            this.context.setHoverData(false);
        }
    },
    onClick(e) {
        if (this.context.setActiveElement) {
            if (this.isActiveElement()) {
                this.setState({ active: false });
                this.context.setActiveElement(false);
            } else {
                this.setState({ active: true });
                this.context.setActiveElement(this.props.hoverKey, this.props.hoverData);
            }
            e.preventDefault();
            e.stopPropagation();
        }
    },
    hoverableEvents() {
        return {
            onMouseOver: this.onMouseOver.bind(this),
            onMouseOut: this.onMouseOut.bind(this),
            onClick: this.onClick.bind(this)
        };
    },
    getInitialState() {
        return { active: false };
    },
    getDefaultProps() {
        return { hoverData: false, hoverKey: false };
    },
    getOpacity() {
        let out = 1.0;
        if (this.props.hoverData) {
            if (!this.isActiveElement() && this.context.hasActiveElement()) {
                out = 0.3;
            }
        }
        return out;
    },
    isActiveElement() {
        return this.context.activeElement === this.props.hoverKey;
    }
};

export default Hoverable;
