import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Chip } from '../../components/Chip';
import { typeSelection } from './constants';

function ChipSelectors({ onClick }) {
  return (
    <Grid container direction="row" justify="space-around" alignItems="center">
      {typeSelection.map(({ id, label }) => (
        <Chip id={id} label={label} onClick={onClick} />
      ))}
    </Grid>
  );
}

export { ChipSelectors };
