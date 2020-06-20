import React, { useState } from 'react';
import MuiChip from '@material-ui/core/Chip';

function Chip(props) {
  const { onClick, id, label } = props;
  const [selected, setSelected] = useState(false);

  const handleOnClick = (e) => {
    onClick({
      id
    });
    setSelected(!selected);
  };
  console.log(selected);
  return (
    <MuiChip
      id={id}
      label={label}
      clickable={true}
      variant={selected ? 'default' : 'outlined'}
      color="primary"
      onClick={handleOnClick}
    />
  );
}

export { Chip };
