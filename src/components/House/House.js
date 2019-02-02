import React from "react";
import "../House/house.css";
import delete_button from "../House/delete_button.png";

export default function House(props) {
  return (
    <div className="dash_container">
      <div className="house">
        <div className="house_details">
          <div className="house_img" Style="background-image:url('');">
            {" "}
            {/* {props.img} */}
          </div>
        </div>
        <div className="house_details">
          <p>Property Name: {props.name}</p>
          <p>Address: {props.address}</p>
          <p>City: {props.city}</p>
          <p>State: {props.propertystate}</p>
          <p>Zip: {props.zip}</p>
        </div>
        <div className="house_details">
          <p>Monthly Mortgage:: {props.mortgage}</p>
          <p>Desired Rent: {props.rent}</p>
        </div>
        <img
          src={delete_button}
          alt="delele"
          className="house_delele_button"
          onClick={() => props.deleteHouse(props.id)}
        />
      </div>
    </div>
  );
}
