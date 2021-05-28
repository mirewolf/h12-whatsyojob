import React, { Component } from "react";
import "../styles/styles.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Click on the name column to sort by alphabetical order</p>
      </div>
    );
  }
}
