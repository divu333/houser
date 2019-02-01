import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import React from "react";

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Wizard} path="/wizard" />
  </Switch>
);
