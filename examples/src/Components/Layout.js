
import React, { Component, PropTypes } from 'react';

class Layout extends Component {
    static propTypes = {
        children: PropTypes.any
    };
    render() {
        return (
            <html>
                <head>
                    <title>Oberd Charts</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" type="text/css" href="/style.css"/>
                </head>
                <body onClick={this.globalClick}>
                    <div className="flex-column z-background">
                        {this.props.main}
                    </div>
                    <script src="/build.js"></script>
                </body>
            </html>
        );
    }
}

export default Layout;
