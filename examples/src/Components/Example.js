
import React, { Component, PropTypes } from 'react';

class Example extends Component {
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.any,
        onRandomize: PropTypes.func,
        onRemountAndRandomize: PropTypes.func
    };
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <button onClick={this.props.onRandomize}>
                    Randomize
                </button>
                <button onClick={this.props.onRemountAndRandomize}>
                    Randomize and Remount
                </button>
                {this.props.children}
            </div>
        );
    }
}

export default Example;
