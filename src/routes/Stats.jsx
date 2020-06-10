import React from 'react';
import { Layout } from '../components/Layout';
import { WorldTable } from '../features/world-table';
import { WorldStatsCards } from '../features/world-stats-cards';
import { makeStyles } from '@material-ui/core/styles';
import { Newsfeed } from '../features/newsfeed';

const useStyles = makeStyles((theme) => ({
    container: {
      width: 450,
    },
}));

function Stats() {
    const classes = useStyles();

    const renderContent = () => (
        <>
            <WorldStatsCards/>
            <WorldTable/>
        </>
    );

    return (
        <Layout
          title={'Worldwide COVID-19 Statistics'}
          renderToolbar={ () => <Newsfeed/> }
        >
          { renderContent() }
        </Layout>
    )
}

export { Stats };