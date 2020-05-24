import React from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { DashboardBase } from '../features/dashboard-base'
import { VerticalTabs } from '../components/VerticalTabs';
import { MobilityGraph } from '../features/mobility-graph';

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
      label: "Mobility",
      component: () => <MobilityGraph/>,
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