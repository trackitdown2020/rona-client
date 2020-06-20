import React, { Suspense, useState } from 'react';
import { useFetchMobility } from '../../lib/hooks/mobilityAPI';
import { Chip } from '../../components/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ResponsiveLine } from '@nivo/line';
import _ from 'lodash';
import { useAsync } from 'react-use';

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
  }
];

const useStyles = makeStyles((theme) => ({
  chipsContainer: {
    marginTop: 24,
    width: '60%'
  },
  graphContainer: {
    height: 600
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
  const [locations, setLocations] = useState([]);
  const { value, loading, error } = useAsync(async () => {
    // Change to url builder
    const response = await fetch(
      `http://localhost:8080/covid19/mobility?country=US&type=all`
    );
    const result = await response.json();
    return result;
  });

  const onToggle = ({ id: selectedId, selected }) => {
    const copyLocations = [...locations];
    if (copyLocations.includes(selectedId)) {
      _.remove(copyLocations, (id) => id === selectedId);
    } else {
      copyLocations.push(selectedId);
    }
    setLocations(copyLocations);
  };

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  console.log(locations);
  const data =
    locations.length > 0
      ? value.filter(({ id }) => {
          console.log(id);
          return locations.includes(idMap[id]);
        })
      : value;

  return (
    <>
      <div className={classes.graphContainer}>
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </div>
      <div className={classes.chipsContainer}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          {typeSelection.map(({ id, label }) => (
            <Chip id={id} label={label} onClick={onToggle} />
          ))}
        </Grid>
      </div>
    </>
  );
}

export { MobilityGraph };
