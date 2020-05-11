import React from 'react';
import { Switch, Route } from 'react-router';
import { Home } from './routes';

function App() {
  return ( 
      <Switch>
          <Route path={'/'} component={Home}/>
          {/* <Route path={'/track'} component={TrackDashboad}/> */}
      </Switch>
  );
}

export default App;