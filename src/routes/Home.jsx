import React from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { DashboardBase } from '../features/dashboard-base'
import { VerticalTabs } from '../components/VerticalTabs';
import { WorldChorolpethMap } from '../features/world-choropleth-map/index.jsx';

const tabs = [
    {
      label: "Heat Maps",
      component: () => (
        <div>
          <h1> Test </h1>
          <div style={{width: "1000px", height: "800px"}}><WorldChorolpethMap/></div>
        </div>
      ),
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