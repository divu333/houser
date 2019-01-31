import React, { Component } from "react";
import House from "../House/House";
import axios from "axios";
import App from "../../App.css";
import { Link } from "react-router-dom";

class Dashbaord extends Component {
  render() {
    return (
      <div className="dash">
        <div className="dashboard">
          <h2 className="dashboard-header">Dashboard</h2>
          <Link to="/wizard">
            <button className="dash_header_button"> Add New Property</button>
          </Link>
        </div>
        <div className="dash_prop_container">
          <h3 className="dash_conatiner_heading"> Home Listing</h3>
        </div>
      </div>
    );
  }
}
export default Dashbaord;
