import React from 'react';
import { Layout } from '../components/Layout';
import { VerticalTabs } from '../components/VerticalTabs';
import { makeStyles } from '@material-ui/core/styles';
import { Newsfeed } from '../features/newsfeed';
import { MobilityGraph } from '../features/mobility-graph';
import useAppState from '../state/AppStateProvider';
import { CountryStatsGraph } from '../features/country-stats-graph';
import { WorldChorolpethMap } from '../features/world-choropleth-map/index.jsx';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 450
  }
}));

const tabs = [
  {
    label: 'Stats',
    component: () => (
      <>
        <h1> Test </h1>
        <CountryStatsGraph />
      </>
    )
  },
  {
    label: 'Heat Maps',
    component: () => <h1> Heat Map </h1>
  },
  {
    label: 'Mobility',
    title: 'Mobility of people',
    component: () => <MobilityGraph />
  }
];

const renderNewsfeed = () => <Newsfeed />;

function Home() {
  const { selectedCountry } = useAppState();
  const { name = 'World' } = selectedCountry;
  const classes = useStyles();

  return (
    <Layout title={name} renderToolbar={renderNewsfeed}>
      <VerticalTabs tabs={tabs} />
    </Layout>
  );
}

export { Home };
