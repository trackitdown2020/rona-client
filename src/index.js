import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Home, Stats, Mobility, Seir } from './routes';
import { AppStateProvider } from 'state/AppStateProvider';

ReactDOM.render(
  <AppStateProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </AppStateProvider>,
  document.getElementById('root')
);
