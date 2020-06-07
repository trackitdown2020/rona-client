import React from 'react';
import { DashboardBase } from '../features/dashboard-base';
import { WorldTable } from '../features/world-table';
import { WorldStatsCards } from '../features/world-stats-cards';

const renderContent = () => (
    <>
        {/* <WorldStatsCards/> */}
        <WorldTable/>
    </>
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