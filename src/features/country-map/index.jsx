import React, { useState, useEffect } from 'react';
import { useAsync } from 'react-use';
import { VectorMap } from '@south-paw/react-vector-maps';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 1000,
    '& svg': {
      stroke: '#fff',
      '& path': {
        fill: `#a82b2b`,
        cursor: `pointer`,
        outline: `none`
      },
      '& :hover': {
        fill: 'rgba(168,43,43,0.83)'
      },
      '& :focus': {
        fill: 'rgba(168,43,43,0.6)'
      }
    }
  }
}));

function CountryChoroplethMap() {
  const classes = useStyles();
  const { value, loading, error } = useAsync(async () => {
    const response = await fetch('http://localhost:8080/geoJSON/china');
    const result = await response.json();
    return result;
  });

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
