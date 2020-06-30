import React from 'react';
import { LineGraph } from './index';

export default { title: 'Line Graph' };

const sampleData = [
  ['x', 'dogs'],
  [0, 0],
  [1, 10],
  [2, 23],
  [3, 17],
  [4, 18],
  [5, 9],
  [6, 11],
  [7, 27],
  [8, 33],
  [9, 40],
  [10, 32],
  [11, 35]
];

const hAxis = { title: 'Time' };
const vAxis = { title: 'Popularity' };
const rootProps = { 'data-testid': '1' };

export const SingleLine = () => (
  <LineGraph
    data={sampleData}
    hAxis={hAxis}
    vAxis={vAxis}
    rootProps={rootProps}
  />
);

const multipleSampleData = [
  ['x', 'dogs', 'cats'],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19]
];

const series = {
  1: { curveType: 'function' }
};

export const MultipleLines = () => (
  <LineGraph
    data={multipleSampleData}
    hAxis={hAxis}
    vAxis={vAxis}
    series={series}
    title={'test'}
    subtitle={'seriously'}
    rootProps={rootProps}
  />
);
