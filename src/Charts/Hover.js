
import React, { Component, PropTypes } from 'react';

import styles from './Hover.css';

class Hover extends Component {
    static propTypes = {
        label: PropTypes.string,
        attributes: PropTypes.object
    };
    render() {
        return (
            <div className={styles.hover + ' oui-chart-hover'}>
                <div className="hover-attribute-label">{this.props.label}</div>
                {Object.keys(this.props.attributes).map(key =>
                    <div key={key} className="hover-attributes">
                        <span className={styles['hover-attribute-key'] + ' hover-attribute-key'}>{key}</span>
                        <span className={styles['hover-attribute-value'] + ' hover-attribute-value'}>{this.props.attributes[key]}</span>
                    </div>
                )}
            </div>
        );
    }
}

export default Hover;
