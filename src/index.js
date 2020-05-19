import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Layout } from 'components/Layout';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={'/'} component={Layout} />
      {/* <Route path={'/track'} component={TrackDashboad}/> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
