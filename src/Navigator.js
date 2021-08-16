import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const Navigator = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component="">
            Hi
          </Route>
          <Route path="/login" component=""></Route>
        </Switch>
      </Router>
    </>
  );
};

export default Navigator;
