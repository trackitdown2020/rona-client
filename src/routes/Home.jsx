import React from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { DashboardBase } from '../features/dashboard-base'

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


function Home() {
    return (<DashboardBase/>)
    // Swap out for Dashboard base 
    // return (
    //     <Container maxWidth="xl" style={{ padding: 0, height: "100vh" }}>
    //         <CssBaseline />
    //         <TopBar />
    //         <Grid container alignItems="stretch" style={{ height: "100%" }}>
    //             <Grid item xs={9}>
    //                 <VerticalTabs tabs={tabs} />
    //             </Grid>
    //         </Grid>
    //     </Container>
    // );
}

export { Home };