import React from 'react';
import { Layout } from '../components/Layout';
import { VerticalTabs } from '../components/VerticalTabs';
import { makeStyles } from '@material-ui/core/styles';
import { Newsfeed } from '../features/newsfeed';
import { MobilityGraph } from '../features/mobility-graph';
import useAppState from '../state/AppStateProvider';
import { CountryStatsGraph } from '../features/country-stats-graph';
import { WorldChorolpethMap } from '../features/world-choropleth-map/index.jsx';
import { VaccineCandidates } from '../features/vaccine-candidates/';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 450
  },
  header: {
    marginBottom: 20
  }
}));

const tabs = (classes) => [
  {
    label: 'Stats',
    component: () => <CountryStatsGraph />
  },
  {
    label: 'Heat Maps',
    component: () => (
      <>
        <h1 className={classes.header}> Heat Map </h1>
        <WorldChorolpethMap />
      </>
    )
  },
  {
    label: 'Mobility',
    title: 'Mobility of people',
    component: () => <MobilityGraph />
  },
  {
    label: 'Vaccine Candidates',
    title: 'Vaccine Candidates',
    component: () => <VaccineCandidates />
  }
];

const renderNewsfeed = () => <Newsfeed />;

function Home() {
  const { selectedCountry } = useAppState();
  const { name = 'World' } = selectedCountry;
  const classes = useStyles();

  return (
    <Layout title={name} renderToolbar={renderNewsfeed}>
      <VerticalTabs tabs={tabs(classes)} />
    </Layout>
  );
}

export { Home };
