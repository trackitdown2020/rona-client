import React from 'react';
import { DashboardBase } from '../features/dashboard-base'
import { VerticalTabs } from '../components/VerticalTabs';

const tabs = [
    {
      label: "Maps",
      component: () => (
        <>
          <h1> Test </h1>
        </>
      ),
    },
    {
      label: "Heat Maps",
      component: () => <h1> Heat Map </h1>,
    },
    {
      label: "Chart 1",
      component: () => <h1> Chart 1 </h1>,
    },
];

const renderVerticalTabs = () => {
    return (
        <VerticalTabs tabs={tabs}/>
    )
}


function Home() {
    return (
        <DashboardBase
            renderContent={renderVerticalTabs}
        />
    );
}

export { Home };