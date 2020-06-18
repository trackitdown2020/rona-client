import React, { useState } from 'react';
import { useFetchMobility } from '../../lib/hooks/mobilityAPI';
import { Chip } from '../../components/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ResponsiveLine } from '@nivo/line';
import _ from 'lodash';

const typeSelection = [
  {
    id: 'parks',
    label: 'Parks'
  },
  {
    id: 'residential',
    label: 'Residential'
  },
  {
    id: 'retail-and-recreation',
    label: 'Retail and Recreation'
  },
  {
    id: 'transit-stations',
    label: 'Transit Stations'
  },
  {
    id: 'workplaces',
    label: 'Workplaces'
  },
  {
    id: 'grocery-and-pharmacy',
    label: 'Grocery and Pharmacy'
  },
  {
    id: 'all',
    label: 'All'
  }
];

const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
  <g>
    <circle
      fill="#fff"
      r={size / 2}
      strokeWidth={borderWidth}
      stroke={borderColor}
    />
    <circle
      r={size / 5}
      strokeWidth={borderWidth}
      stroke={borderColor}
      fill={color}
      fillOpacity={0.35}
    />
  </g>
);

const useStyles = makeStyles((theme) => ({
  chipsContainer: {
    marginTop: 24,
    width: '60%'
  }
}));

const properties = {
  width: 1400,
  height: 600,
  margin: { top: 50, right: 200, bottom: 50, left: 80 },
  animate: true,
  enableSlices: 'x'
};

const idMap = {
  'Retail and Recreation': 'retail-and-recreation',
  'Grocery and Pharmacy': 'grocery-and-pharmacy',
  Parks: 'parks',
  'Transit Stations': 'transit-stations',
  Workplaces: 'workplaces',
  Residential: 'residential'
};

function MobilityGraph() {
  const classes = useStyles();
  const [types, setTypes] = useState([]);

  //   const onToggle = (d) => {
  //       const { id } = d;
  //       const actualId = idMap[id];
  //       const copyTypes = [...types];
  //       if(copyTypes.includes(actualId)) {
  //         _.remove(copyTypes, id => id === actualId);
  //       } else {
  //           copyTypes.push(actualId);
  //       }
  //       setTypes(copyTypes);
  //   }

  const { response, error, loading } = useFetchMobility('US', '', types);

  if (loading || !response) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ height: '1400px' }}>
      <ResponsiveLine
        {...properties}
        data={response}
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
          min: -100,
          max: 100
        }}
        axisLeft={{
          legend: 'linear scale',
          legendOffset: 12,
          legend: 'Percentage of Mobility (%)',
          legendPosition: 'middle',
          legendOffset: -60,
          format: (value) => `${value}%`
        }}
        axisBottom={{
          format: '%b %d',
          tickValues: 'every 5 days',
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
    </div>
  );
}

export { MobilityGraph };
