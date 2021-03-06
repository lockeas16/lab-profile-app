import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AuthFormContainer from "./components/auth/AuthFormContainer";
import ProfileContainer from "./components/profile/ProfileContainer";

const Router = () => (
  <Switch>
    <Route exact path="/" render={props => <Home {...props} />} />
    <Route
      exact
      path="/login"
      render={props => <AuthFormContainer {...props} />}
    />
    <Route
      exact
      path="/signup"
      render={props => <AuthFormContainer {...props} />}
    />
    <Route
      exact
      path="/profile"
      render={props => <ProfileContainer {...props} />}
    />
  </Switch>
);

export default Router;
