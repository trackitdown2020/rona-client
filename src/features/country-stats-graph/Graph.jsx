import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const properties = {
  width: 1400,
  height: 600,
  margin: { top: 50, right: 200, bottom: 50, left: 80 },
  animate: true,
  enableSlices: 'x'
};

function Graph({ data }) {
  return (
    <ResponsiveLine
      {...properties}
      data={data}
      xScale={{
        type: 'time',
        format: '%Y-%m-%d',
        useUTC: false,
        precision: 'day'
      }}
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: 'linear',
        stacked: false,
        min: 0,
        max: 100000
      }}
      axisLeft={{
        legend: 'linear scale',
        legendOffset: 12,
        legend: 'Number of People',
        legendPosition: 'middle',
        legendOffset: -60,
        format: (value) => `${value}`
      }}
      axisBottom={{
        format: '%b %d',
        tickValues: 'every 15 days',
        legend: 'Date',
        legendOffset: -12,
        legendPosition: 'middle',
        orient: 'bottom',
        legendOffset: 36
      }}
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
