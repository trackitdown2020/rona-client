import React from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#FFF',
    padding: '10px 20px',
    borderRadius: 4,
    boxShadow: theme.shadows[5]
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
          const { color, value, dataKey } = dataPoint;
          return (
            <Typography style={{ color }} variant="body2" gutterBottom>
              {dataKey[0].toUpperCase() + dataKey.substring(1)}: {value}%
            </Typography>
          );
        })}
      </div>
    );
  }

  return null;
}

export { GraphTooltip };
