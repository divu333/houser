import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
import routes from "./routes";
import Dashbaord from "./components/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="dash">
          <div className="dashboard">
            <h2 className="dashboard-header">Dashboard</h2>
            <button className="dash_header_button"> Add New Property</button>
          </div>

          <div className="dash_container">
            <h3 className="dash_conatiner_heading">Home Listing</h3>
            <div className="house" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
