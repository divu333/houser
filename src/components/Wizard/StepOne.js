import { Link } from "react-router-dom";
import React, { Component } from "react";
import wizard from "../Wizard/wizard.css";
import { connect } from "react-redux";
import {
  updateName,
  updateAddress,
  updateCity,
  updatePropertyState,
  updateZipcode
} from "../../ducks/reducer";

class StepOne extends Component {
  componentDidUpdate() {}

  render() {
    const {
      updateName,
      updateAddress,
      updateCity,
      updatePropertyState,
      updateZipcode
    } = this.props;
    console.log(this.props);

    return (
      <div>
        <div className="wizard-input-container">
          <div className="wizard-input-property">
            <p> Property Name</p>
            <input type="text" onChange={e => updateName(e.target.value)} />
          </div>
          <div className="wizard-input-property">
            <p> Address</p>
            <input
              type="text"
              Style="width: 35vw;"
              onChange={e => updateAddress(e.target.value)}
            />
          </div>
          <div className="wizard-input-property">
            <p> City</p>
            <input type="text" onChange={e => updateCity(e.target.value)} />
          </div>
          <div className="wizard-input-property">
            <p> State</p>
            <input
              type="text"
              Style="width: 70px;"
              onChange={e => updatePropertyState(e.target.value)}
            />
          </div>
          <div className="wizard-input-property">
            <p> Zip</p>
            <input
              type="number"
              Style="width: 100px;"
              onChange={e => updateZipcode(e.target.value)}
            />
          </div>
          {/* <Link to="/">
            <button className="wizard_button" onClick={() => this.addHouse()}>
              {" "}
              Complete
            </button>
          </Link> */}
          <Link to="/wizard/step2">
            <button className="wizard_button"> Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { name, address, city, propertystate, zip } = state;

  return {
    name,
    address,
    city,
    propertystate,
    zip
  };
}

export default connect(
  mapStateToProps,
  { updateName, updateAddress, updateCity, updatePropertyState, updateZipcode }
)(StepOne);
