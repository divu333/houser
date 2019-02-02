import React, { Component } from "react";
import wizard from "../Wizard/wizard.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateImage } from "../../ducks/reducer";
class StepTwo extends Component {
  render() {
    const { updateImage } = this.props;
    console.log(this.props);
    return (
      <div>
        <div className="wizard-input-container">
          <div className="wizard-img">
            <p>Image URL</p>
            <input
              Style="width: 35vw;"
              onChange={e => updateImage(e.target.value)}
            />
          </div>
          <Link to="/wizard/step1">
            {" "}
            <button className="wizard_button wizard-previous">
              {" "}
              Previous Step
            </button>
          </Link>

          <Link to="/wizard/step3">
            <button className="wizard_button"> Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { img } = state;

  return {
    img
  };
}

export default connect(
  mapStateToProps,
  { updateImage }
)(StepTwo);
