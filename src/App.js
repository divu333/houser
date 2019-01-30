import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import routes from "./routes";
import Dashbaord from "./components/Dashboard/Dashboard";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
