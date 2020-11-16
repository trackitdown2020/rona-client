import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { Home, Stats, Mobility, Seir } from './routes';
import { AppStateProvider } from 'state/AppStateProvider';
import { Workspace } from './components/Workspace';
import { Layout } from './components/Layout';

ReactDOM.render(
  <AppStateProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:workspace" component={Workspace}/>
          </Switch>
          </Layout>
      </Router>
  </AppStateProvider>,
  document.getElementById('root')
);
