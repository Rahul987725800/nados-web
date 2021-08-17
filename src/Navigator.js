import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Practice from "./pages/Practice";
import Signup from "./pages/Signup";

const Navigator = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component="" exact>
            Hi
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/practice">
            <Practice />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Navigator;
