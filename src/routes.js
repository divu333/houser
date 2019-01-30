import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Dashbaord from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import { Component } from "react";
import React from "react";

export default (
  <Switch>
    <Route component={Dashbaord} exact path="/" />
    <Route component={Wizard} path="/wizard" />
  </Switch>
);
