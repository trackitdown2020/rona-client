import React from 'react';
import { AnimatedList } from './index';
import { SimpleCard }  from './Item';

const mockData = new Array(10).fill(null).map((_, index) => ({ value: index }) );
console.log(mockData);

const MockListComponent = ({value}) => (
    <div>
        <SimpleCard value={value}/>
    </div>
)

export default { title: 'Animated List' };

export const AnimatedListExample = () => (
  <AnimatedList
    data={mockData}
    interval={3000}
    ItemComponent={MockListComponent}
  />
);


