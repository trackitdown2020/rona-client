import React from 'react';
import { Chip } from './index';

export default { 'title': 'Chip' };

export const ChipExample = () => {

    const onClick = (id) => {
        console.log(id);
    }

    return (
        <Chip
            onClick={onClick}
            id={'test'}
            label={'test'}
        />
    );
}