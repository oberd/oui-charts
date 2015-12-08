/* eslint block-scoped-var: 0*/

/* UI Layout Components */
import d3 from 'd3';
export Chart from './Charts/Chart';
export Bars from './Charts/Bars';
export Lines from './Charts/Lines';
export Legend from './Charts/Legend';
export BucketX from './Charts/Axis/BucketX';

export function colorScale(count) {
    return d3.scale.category20().domain(d3.range(count));
}
