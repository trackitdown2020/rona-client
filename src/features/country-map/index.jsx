import React, { useState, useEffect } from 'react';
import { useAsync } from 'react-use';
import { VectorMap } from '@south-paw/react-vector-maps';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { makeStyles } from '@material-ui/core/styles';
import { scaleLinear } from 'd3-scale';

const colorScale = scaleLinear().domain([0, 25]).range(['#0022c9', '#f00a0a']);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& svg': {
      stroke: '#fff',
      '& path': {
        fill: (props) =>
          props.isToolbar ? colorScale(props.casesPercentage) : `#a82b2b`,
        cursor: `pointer`,
        outline: `none`
      },
      '& :hover': {
        fill: (props) =>
          props.isToolbar
            ? colorScale(props.casesPercentage)
            : 'rgba(168,43,43,0.83)'
      },
      '& :focus': {
        fill: (props) =>
          props.isToolbar
            ? colorScale(props.casesPercentage)
            : 'rgba(168,43,43,0.6)'
      }
    }
  }
}));

function CountryChoroplethMap(props) {
  const { country, casesPercentage } = props;
  const classes = useStyles(props);

  const { value, loading, error } = useAsync(async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/geoJSON/${country}`
    );
    const result = await response.json();
    return result;
  }, [country]);

  if (loading || !value) {
    return <LoadingSpinner />;
  }

  return (
    <div className={classes.root}>
      <VectorMap {...value} />
    </div>
  );
}

export { CountryChoroplethMap };
