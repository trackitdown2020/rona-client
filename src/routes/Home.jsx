import React from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

function Home() {
    return (
        <Container maxWidth="xl" style={{ padding: 0, height: "100vh" }}>
            <CssBaseline />
            <TopBar />
            <Grid container alignItems="stretch" style={{ height: "100%" }}>
                <Grid item xs={9}>
                <VerticalTabs tabs={tabs} />
                </Grid>
                <Grid item xs={3} style={{ backgroundColor: "grey" }}>
                content
                {/* <CoronaviursNewsfeed /> */}
                </Grid>
            </Grid>
        </Container>
    )
}

export { Home };