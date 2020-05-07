import React from 'react';
import { useQuery } from 'hooks/react-router-hooks';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { TopBar } from "client/components/TopBar";
import { DashboardTabs } from 'features/dashboard-tabs';

function Dashboard() {
    const query = useQuery();
    const realtime = query.get("realtime");

    return (
        <Container maxWidth="xl" style={{ padding: 0, height: "100vh" }}>
        <CssBaseline />
        <TopBar />
        <Grid container alignItems="stretch" style={{ height: "100%" }}>
            <Grid item xs={9}>
                <DashboardTabs />
            </Grid>
            <Grid item xs={3} style={{ backgroundColor: "grey" }}>
            content
            {/* <CoronaviursNewsfeed /> */}
            </Grid>
        </Grid>
        </Container>
    )
}

export { Dashboard };