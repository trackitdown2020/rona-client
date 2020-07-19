import React from 'react';
import { HtmlTooltip } from './HtmlTooltip';
import Typography from '@material-ui/core/Typography';

function ChloroplethTooltip(props) {
    const { children, country, totalConfirmed } = props;
    return (
        <HtmlTooltip
            title={
                <>
                    <Typography variant="h6">{country}</Typography>
                    <Typography variant="subtitle1">{totalConfirmed} cases</Typography>
                </>
            }
        >
         { children }
        </HtmlTooltip>
    )
}

export { ChloroplethTooltip };