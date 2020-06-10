import React from 'react';
import { Layout } from '../components/Layout';
import { VerticalTabs } from '../components/VerticalTabs';
import { makeStyles } from '@material-ui/core/styles';
import { Newsfeed } from '../features/newsfeed';

const useStyles = makeStyles((theme) => ({
    container: {
      width: 450,
    },
}));

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

const renderVerticalTabs = () => {
    return (
        <VerticalTabs tabs={tabs}/>
    )
}

const renderNewsfeed = () => <Newsfeed/>

function Home() {
  const classes = useStyles();

  return (
      <Layout
        renderToolbar={renderNewsfeed}
      >
        { renderVerticalTabs() }
      </Layout>
  );
}

export { Home };