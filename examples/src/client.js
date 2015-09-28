
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();

document.addEventListener('DOMContentLoaded', () => {
    render(<Router history={history}>{routes}</Router>, document);
});
