import React from 'react';
import { DashboardBase } from '../features/dashboard-base';
import { WorldTable } from '../features/world-table';
import { WorldStatsCards } from '../features/world-stats-cards';
import Grid from '@material-ui/core/Grid';

const renderContent = () => (
    // <Grid
    //     container
    //     direction="column"
    //     justify="flex-start"
    //     alignItems="center"
    // >
    <>
        <WorldStatsCards/>
        <WorldTable/>
    </>
    // </Grid>
);

function Stats() {
    return (
        <DashboardBase
            title={'Worldwide COVID-19 Statistics'}
            renderContent={renderContent}
        />
    )
}

export { Stats };