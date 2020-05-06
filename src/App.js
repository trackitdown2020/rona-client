import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Dashboard } from 'features/coronavirus-dashboard'

const App = () => {
  return (
    <Switch>
      <Route path={'/'} component={Dashboard}/>
    </Switch>
  )
}

export default App;
