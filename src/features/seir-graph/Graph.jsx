import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const properties = {
  width: 1400,
  height: 600,
  margin: { top: 50, right: 200, bottom: 50, left: 80 },
  animate: true,
  enableSlices: 'y'
};

function Graph({ data }) {
  return (
    <ResponsiveLine
      {...properties}
      data={data}
      xScale={{
        type: 'point'
      }}
      yScale={{
        type: 'linear',
        stacked: false
      }}
      axisLeft={{
        legend: 'Population',
        legendPosition: 'middle',
        legendOffset: -60,
        format: (value) => `${value}`
      }}
      axisBottom={{
        legend: 'time',
        legendPosition: 'middle',
        orient: 'bottom',
        legendOffset: 35,
        format: (tick) => (tick % 5 === 0 ? tick : '')
      }}
      colors={{ scheme: 'dark2' }}
      curve={'linear'}
      enablePoints={false}
      enablePointLabel={false}
      enableGridX={false}
      enableSlices={'x'}
      animate={true}
      legends={[
        {
          anchor: 'right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 60,
          itemHeight: 60,
          itemOpacity: 0.75,
          symbolSize: 10,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)'
        }
      ]}
    />
  );
}

export { Graph };
