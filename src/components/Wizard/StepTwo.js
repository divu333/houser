import React, { Component } from "react";
import wizard from "../Wizard/wizard.css";
import { Link } from "react-router-dom";

class StepTwo extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="wizard-input-container">
          <div className="wizard-img">
            <p>Image URL</p>
            <input value="" Style="width: 35vw;" />
          </div>
          <Link to="/wizard/step1">
            {" "}
            <button className="wizard_button wizard-previous">
              {" "}
              Previous Step
            </button>
          </Link>

          <Link to=".wizard/step3">
            <button className="wizard_button"> Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default StepTwo;
