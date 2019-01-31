import React, { Component } from "react";
import House from "../House/House";
import axios from "axios";
import App from "../../App.css";
import { Link } from "react-router-dom";

class Dashbaord extends Component {
  constructor() {
    super();
    this.state = {
      houseList: []
    };
    this.getHouseList = this.getHouseList.bind(this);
  }

  getHouseList() {
    axios.get("/api/houses").then(res => {
      this.setState({ houseList: res.data });
      console.log(res.data);
    });
  }

  componentDidMount() {
    this.getHouseList();
  }

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

          {this.state.houseList.map(val => {
            return (
              <House
                key={val.id}
                id={val.id}
                name={val.name}
                address={val.address}
                city={val.city}
                propertystate={val.state}
                zipcode={val.zip}
              />
            );
          })}
        </div>
        <div />
      </div>
    );
  }
}
export default Dashbaord;
