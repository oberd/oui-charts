
import d3 from 'd3';
import { findDOMNode } from 'react-dom';

const AnimatedPrimitive = {
    shouldComponentUpdate(nextProps) {
        let ignore = ['animationDuration', 'animationDelay', 'hoverData', 'style'];
        const props = this.props;
        const changedKeys = Object.keys(this.props)
            .filter(prop => ignore.indexOf(prop) < 0)
            .filter(prop => nextProps[prop] !== props[prop]);
        let shouldUpdate = true;
        if (changedKeys.length) {
            const $el = d3.select(findDOMNode(this));
            const trans = $el.transition().duration(nextProps.animationDuration);
            changedKeys.forEach(key => {
                const val = nextProps[key];
                trans.attr(key, val);
            });
            if (changedKeys.indexOf('children') > 0) {
                trans.text(nextProps.children);
            }
            shouldUpdate = false;
        }
        return shouldUpdate;
    }
};

export default AnimatedPrimitive;
