import ReactPlayer from 'react-player';
import React, { useState } from 'react';
import clsx from 'clsx';
import { useStyles } from './styles';
import moment from 'moment';

import Typography from '@material-ui/core/Typography';


const Timestamp = (props) => {
  const { date } = props; 
  return (
      <Typography component="span" variant="caption" color="textSecondary">
        { moment(date).fromNow() }
      </Typography>
  )
}
  

export default Timestamp;