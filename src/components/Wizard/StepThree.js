import React, { Component } from "react";
import wizard from "../Wizard/wizard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateMortgage, updateRent } from "../../ducks/reducer";

class StepThree extends Component {
  clearInputs() {
    this.setState = {
      name: "",
      address: "",
      city: "",
      propertystate: "",
      zip: "",
      rent: ""
    };
  }

  // handleChange(e, name) {
  //   const value = e.target.value;
  //   this.setState({ [name]: value });
  // }

  addHouse() {
    let promise = axios.post("/api/houses", {
      name: this.props.name,
      address: this.props.address,
      city: this.props.city,
      propertystate: this.props.propertystate,
      zip: this.props.zip,

      img: this.props.img,
      mortgage: this.props.mortgage,
      rent: this.props.rent
    });
    promise.then(() => {
      this.clearInputs();
    });
  }

  render() {
    const { updateMortgage, updateRent } = this.props;
    let rent = this.props.mortgage * 1.25;
    rent = rent ? rent : 0;
    return (
      <div>
        <div className="wizard-input-container">
          <div className="wizard-recommended">Recommended Rent : ${rent}</div>
          <div className="wizard-input">
            <p>Monthly Mortgage Amount </p>
            <input
              type="number"
              Style="width:35vw;"
              onChange={e => updateMortgage(e.target.value)}
            />
          </div>

          <div className="wizard-input">
            <p>Desired Monthly Rent</p>
            <input
              type="number"
              Style="width:35vw;"
              onChange={e => updateRent(e.target.value)}
            />
          </div>
        </div>
        <Link to="/wizard/step2">
          {" "}
          <button className="wizard_button wizard-previous">
            {" "}
            Previous Step
          </button>
        </Link>

        <Link to="/">
          <button className="wizard_button" onClick={() => this.addHouse()}>
            {" "}
            Complete
          </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    name,
    address,
    city,
    propertystate,
    zip,
    img,
    mortgage,
    rent
  } = state;
  return {
    name,
    address,
    city,
    propertystate,
    zip,
    img,
    mortgage,
    rent
  };
}

export default connect(
  mapStateToProps,
  { updateMortgage, updateRent }
)(StepThree);
