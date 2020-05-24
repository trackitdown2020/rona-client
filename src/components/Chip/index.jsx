import React, { useState } from 'react';
import MuiChip from '@material-ui/core/Chip';

function Chip(props) {
    const { onClick, id, label } = props;
    const [clicked, setClicked] = useState(false);

    const handleOnClick = (e) => {
        onClick({ 
            id,
            selected: !clicked 
        });
        setClicked(!clicked);
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