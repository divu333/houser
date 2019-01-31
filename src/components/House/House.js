import React from "react";
import "../House/house.css";

export default function House(props) {
  return (
    <div className="dash_container">
      {/* <h3 className="dash_conatiner_heading">Home Listing</h3> */}
      <div className="house">
        <div>
          <p>Property Name: {props.name}</p>
          <p>Address: {props.address}</p>
          <p>City: {props.city}</p>
          <p>State: {props.propertystate}</p>
          <p>Zipcode: {props.zipcode}</p>
        </div>
      </div>
    </div>
  );
}
