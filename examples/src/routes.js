
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Components/Layout';
import Home from './Pages/Home';
import BarChart from './Pages/BarChart';
import LineChart from './Pages/LineChart';
import BarAndLine from './Pages/BarAndLine';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute components={{ main: Home }} />
        <Route path="/bar-chart" components={{ main: BarChart }} />
        <Route path="/line-chart" components={{ main: LineChart }} />
        <Route path="/bar-and-line" components={{ main: BarAndLine }} />
    </Route>
);

export default routes;
