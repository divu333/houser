import { Route, Switch } from "react-router-dom";
import Dashbaord from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import { Component } from "react";
import React from "react";

export default function routes() {
  return (
    <Switch>
      <Route path="/" Component={Dashbaord} />
      <Route path="/wizard" Component={Wizard} />
    </Switch>
  );
}
