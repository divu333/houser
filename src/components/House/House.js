import React from "react";
import "../House/house.css";
import axios from "axios";

export default function House(props) {
  return (
    // <div className="product-box">
    //   <img
    //     src={props.currentHouse.img}
    //     alt={props.currentHouse.name}
    //     className="product-image"
    //   />
    //   <div className="product-information">
    //     <div className="name-price">
    //       <p>{props.currentHouse.name}</p>
    //     </div>
    //   </div>
    // </div>

    <div className="dash_container">
      <h3 className="dash_conatiner_heading">Home Listing</h3>
      <div className="house" />
    </div>
  );
}
