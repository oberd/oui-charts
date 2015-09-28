
import { PropTypes } from 'react';

export const Size = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
]);

export const Children = PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
    PropTypes.string
]);
