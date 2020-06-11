import React from 'react';
import { Layout } from '../components/Layout';
import { WorldTable } from '../features/world-table';
import { WorldStatsCards } from '../features/world-stats-cards';
import { makeStyles } from '@material-ui/core/styles';
import { Newsfeed } from '../features/newsfeed';
import useAppState from '../state/AppStateProvider';

const useStyles = makeStyles((theme) => ({
    container: {
      width: 450,
    },
}));

function Stats() {
    const { selectedCountry } = useAppState();
    const classes = useStyles();

    const renderContent = () => (
        <>
            <WorldStatsCards/>
            <WorldTable/>
        </>
    );

    const { name } = selectedCountry;

    return (
        <Layout
          title={name ? name : 'Worldwide COVID-19 Statistics'}
          renderToolbar={ () => <Newsfeed/> }
        >
          { renderContent() }
        </Layout>
    )
}

export { Stats };