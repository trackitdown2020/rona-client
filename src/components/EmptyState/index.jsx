import React, { useState } from 'react';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

function EmptyState(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img className={classes.image} src=""></img>
      <h3 className={classes.title}></h3>
      <p className={classes.description}>
        There is no data for {props.sectionHeader}
      </p>
    </div>
  );
}

EmptyState.propTypes = {
  sectionHeader: PropTypes.string
};

export default EmptyState;
