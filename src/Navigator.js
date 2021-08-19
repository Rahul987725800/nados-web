import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Chat from "./pages/Chat/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Practice from "./pages/Practice";
import Signup from "./pages/Signup";
import TextEditor from "./pages/TextEditor/TextEditor";

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
          <Route path="/editor">
            <TextEditor />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Navigator;
