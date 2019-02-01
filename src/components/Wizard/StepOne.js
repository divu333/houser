import { Link } from "react-router-dom";
import React, { Component } from "react";
import axios from "axios";
import wizard from "../Wizard/wizard.css";
class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {}

  handleChange(e, name) {
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  //   addHouse() {
  //     const newHouse = {
  //       name: this.state.name,
  //       address: this.state.address,
  //       city: this.state.city,
  //       state: this.state.address,
  //       zipcode: this.state.zipcode
  //     };
  //     axios.post("/api/houses", newHouse).then(() => {});
  //   }

  render() {
    return (
      <div>
        <div className="wizard-input-container">
          <div className="wizard-input-property">
            <p> Property Name</p>
            <input
              type="text"
              value={this.state.name}
              onChange={e => this.handleChange(e, "name")}
            />
          </div>
          <div className="wizard-input-property">
            <p> Address</p>
            <input
              type="text"
              Style="width: 35vw;"
              value={this.state.address}
              onChange={e => this.handleChange(e, "address")}
            />
          </div>
          <div className="wizard-input-property">
            <p> City</p>
            <input
              type="text"
              value={this.state.city}
              onChange={e => this.handleChange(e, "city")}
            />
          </div>
          <div className="wizard-input-property">
            <p> State</p>
            <input
              type="text"
              Style="width: 70px;"
              value={this.state.state}
              onChange={e => this.handleChange(e, "state")}
            />
          </div>
          <div className="wizard-input-property">
            <p> Zip</p>
            <input
              type="number"
              value="0"
              Style="width: 100px;"
              onChange={e => this.handleChange(e, "zipcode")}
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

export default StepOne;