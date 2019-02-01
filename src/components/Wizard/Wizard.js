import React, { Component } from "react";
import StepOne from "../Wizard/StepOne";
import StepTwo from "../Wizard/StepTwo";
import StepThree from "../Wizard/StepThree";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

class Wizard extends Component {
  render() {
    return (
      <div className="wizard-content">
        <div className="wizard-header">
          <h2 className="wizard-heading"> Add New Listing</h2>
          <Link to="/">
            <button className="wizard-header-button">Cancel</button>
          </Link>
        </div>
        <Route component={StepOne} path="/wizard/step1" />
        <Route component={StepTwo} path="/wizard/step2" />
        <Route component={StepThree} path="/wizard/step3" />
      </div>
    );
  }
}

export default Wizard;
