
import React, { Component, PropTypes } from 'react';

import { Link } from 'react-router';

export default class Home extends Component {
    static propTypes = {

    };
    render() {
        return (
            <div>
                <h1>Examples</h1>
                <nav>
                    <ul>
                        <li><Link to="/bar-chart">Bar Chart</Link></li>
                        <li><Link to="/line-chart">Line Chart</Link></li>
                        <li><Link to="/bar-and-line">Bar and Line Chart</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
