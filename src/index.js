import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Home, Stats, Mobility, Seir } from './routes';
import { AppStateProvider } from 'state/AppStateProvider';
import { Workspace } from './components/Workspace';
import { Layout } from './components/Layout';

console.log(`Using $%{process.env.REACT_APP_ENV}`);

ReactDOM.render(
  <AppStateProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:workspace" component={Workspace}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  </AppStateProvider>,
  document.getElementById('root')
);
