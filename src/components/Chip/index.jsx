import React, { useState } from 'react';
import MuiChip from '@material-ui/core/Chip';

function Chip(props) {
    const { onClick, id, label, clicked } = props;

    console.log(clicked)
    const handleOnClick = (e) => {
        onClick({ 
            id,
            selected: !clicked 
        });
    }

    return (
        <MuiChip 
            id={id}
            label={label}
            clickable={true}
            variant={clicked ? "default" : 'outlined'}
            color="primary"
            onClick={handleOnClick}
        />
    );
}

export { Chip };