import React, { useState } from 'react';
import { useFetchMobility } from '../../lib/hooks/mobilityAPI';
import { Chip } from '../../components/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { Line } from '@nivo/line';

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
  width: 1200,
  height: 600,
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  animate: true,
  enableSlices: 'x'
};

function MobilityGraph() {
  const classes = useStyles();
  const [types, setTypes] = useState([]);

  const handleOnClick = ({ id, selected }) => {
    if (id === 'all') {
      setTypes(['all']);
      return;
    } else {
      let newTypesList;
      if (types.includes('all')) {
        newTypesList = [];
      } else {
        newTypesList = [...types];
      }
      if (selected) {
        if (!newTypesList.includes(id)) {
          newTypesList.push(id);
        }
      } else {
        let index = newTypesList.findIndex((value) => value === id);
        console.log(index);
        newTypesList.splice(index, 1);
      }
      setTypes(newTypesList);
    }
  };

  const { response, error, loading } = useFetchMobility('US', '', types);

  if (loading || !response) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ height: '1000px' }}>
      <Line
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
          min: -1,
          max: 1
        }}
        axisLeft={{
          legend: 'linear scale',
          legendOffset: 12
        }}
        axisBottom={{
          format: '%b %d',
          tickValues: 'every 2 days',
          legend: 'time scale',
          legendOffset: -12
        }}
        pointSize={8}
        curve={'linear'}
        enablePointLabel={false}
        pointSize={16}
        pointBorderWidth={1}
        pointBorderColor={{
          from: 'color',
          modifiers: [['darker', 0.3]]
        }}
        useMesh={true}
        enableSlices={false}
      />
      {/* <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.chipsContainer}
            >
                {
                    typeSelection.map(({id, label}) => 
                        (<Chip id={id}
                            label={label}
                            clicked={types.includes(id)}
                            onClick={handleOnClick}
                        />))
                }
            </Grid> */}
    </div>
  );
}

export { MobilityGraph };
