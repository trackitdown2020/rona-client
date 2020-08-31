import React from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#A9A9A9'
  }
}));

function GraphTooltip({ active, payload, label }) {
  const classes = useStyles();
  if (active) {
    return (
      <div className={classes.container}>
        <Typography variant="body1" gutterBottom>
          {moment(label).format('MMMM DD, YYYY')}
        </Typography>
        {payload.map((dataPoint) => {
          const { color, name, value } = dataPoint;
          return (
            <Typography style={{ color }} variant="body2" gutterBottom>
              {name.toUpperCase()}: {value}%
            </Typography>
          );
        })}
      </div>
    );
  }

  return null;
}

export { GraphTooltip };
