import React, { useState } from 'react';
import MuiChip from '@material-ui/core/Chip';
import { useStyles } from './styles';

function Chip(props) {
  const { onClick, id, label } = props;
  const [selected, setSelected] = useState(false);
  const classes = useStyles();

  const handleOnClick = (e) => {
    onClick({
      id
    });
    setSelected(!selected);
  };

  return (
    <MuiChip
      id={id}
      label={label}
      clickable={true}
      variant={selected ? 'default' : 'outlined'}
      color="primary"
      onClick={handleOnClick}
      classes={classes}
    />
  );
}

export { Chip };
