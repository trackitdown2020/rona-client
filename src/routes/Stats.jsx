import React from 'react';
import { Layout } from '../components/Layout';
import { WorldTable } from '../features/world-table';
import { CountryTable } from '../features/country-table';
import { WorldStatsCards } from '../features/world-stats-cards';
import { CountryStatsCard } from '../features/country-stats-cards';
import { makeStyles } from '@material-ui/core/styles';
import { Newsfeed } from '../features/newsfeed';
import useAppState from '../state/AppStateProvider';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
    container: {
      width: 450,
    },
}));

function Stats() {
    const { selectedCountry } = useAppState();
    const classes = useStyles();

    const renderWorldContent = () => (
        <>
            <WorldStatsCards/>
            <WorldTable/>
        </>
    );

    const renderCountryContent = () => (
      <>
        <CountryStatsCard/>
        <CountryTable/>
      </>
    )

    const { name } = selectedCountry;

    return (
        <Layout
          title={name ? name : 'Worldwide COVID-19 Statistics'}
          renderToolbar={ () => <Newsfeed/> }
        >
          { _.isEmpty(selectedCountry) ? renderWorldContent() : renderCountryContent() }
        </Layout>
    )
}

export { Stats };