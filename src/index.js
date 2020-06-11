import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Home, Stats, Seir } from './routes';
import { Provider } from 'state/AppStateProvider';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/stats" component={Stats} />
        <Route path="/seir" component={Seir} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
