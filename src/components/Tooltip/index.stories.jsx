import React from 'react';
import { ChloroplethTooltip } from './ChloroplethTooltip';
import Button from '@material-ui/core/Button'

export default { title: 'Tooltips' };

export const ChloroplethTooltipExample = () => (
    <ChloroplethTooltip country={'US'} totalConfirmed={1000}>
        <Button> Test </Button>
    </ChloroplethTooltip>
)