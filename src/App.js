import React from 'react';
import { Switch, Route } from 'react-router';
import { Home, Stats } from './routes';

function App() {
  return ( 
      <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/stats'} component={Stats}/>
      </Switch>
  );
}

export default App;