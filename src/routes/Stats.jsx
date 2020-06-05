import React from 'react';
import { DashboardBase } from '../features/dashboard-base';
import { WorldTable } from '../features/world-table';

const renderContent = () => (
    <WorldTable/>
)

function Stats() {
    return (
        <DashboardBase
            renderContent={renderContent}
        />
    )
}

export { Stats };