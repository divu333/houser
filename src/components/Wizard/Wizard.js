import React, { Component } from "react";
import App from "../../App.css";
import { Link } from "react-router-dom";

class Wizard extends Component {
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="wizard-content">
        <div className="wizard-header">
          <h2 className="wizard-heading"> Add New Listing</h2>
          <Link to="/">
            <button className="wizard-header-button">Cancel</button>
          </Link>
        </div>
        <div className="wizard-input-container">
          <div className="wizard-input-property">
            <p> Property Name</p>
            <input type="text" onChange={this.handleChange} />
          </div>
          <div className="wizard-input-property">
            <p> Address</p>
            <input
              type="text"
              Style="width: 35vw;"
              onChange={this.handleChange}
            />
          </div>
          <div className="wizard-input-property">
            <p> City</p>
            <input type="text" onChange={this.handleChange} />
          </div>
          <div className="wizard-input-property">
            <p> State</p>
            <input
              type="text"
              Style="width: 70px;"
              onChange={this.handleChange}
            />
          </div>
          <div className="wizard-input-property">
            <p> Zip</p>
            <input
              type="number"
              value="0"
              Style="width: 100px;"
              onChange={this.handleChange}
            />
          </div>
          <button className="wizard_button"> Complete</button>
        </div>
      </div>
    );
  }
}

export default Wizard;
