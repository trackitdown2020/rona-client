import React from 'react';
import { Layout } from '../components/Layout';
import { SeirGraph } from '../features/seir-graph';
import { Newsfeed } from '../features/newsfeed';

function Seir() {
  const renderContent = () => {
    return <SeirGraph />;
  };

  return (
    <Layout title={'Seir Graph'} renderToolbar={() => <Newsfeed />}>
      {renderContent()}
    </Layout>
  );
}

export { Seir };
