import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Layout } from 'components/Layout';
import { Provider } from 'state/AppStateProvider';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route path="/stats" component={}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
