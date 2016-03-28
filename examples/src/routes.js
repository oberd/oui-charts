
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Components/Layout';
import Home from './Pages/Home';
import BarChart from './Pages/BarChart';
import LineChart from './Pages/LineChart';
import BarAndLine from './Pages/BarAndLine';
import GaugeExample from './Pages/Gauge';
import TickMarks from './Pages/TickMarks';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute components={{ main: Home }} />
        <Route path="/bar-chart" components={{ main: BarChart }} />
        <Route path="/line-chart" components={{ main: LineChart }} />
        <Route path="/bar-and-line" components={{ main: BarAndLine }} />
        <Route path="/tick-marks" components={{ main: TickMarks }} />
        <Route path="/gauge" components={{ main: GaugeExample }} />
    </Route>
);

export default routes;
