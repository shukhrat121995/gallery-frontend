import React, { Component } from "react";
import "./Error.css";

export default class Error extends Component {
  render() {
    return (
      <div className="error-container">
        <img
          className="error-image"
          src={require(`../../images/${this.props.image}`).default}
          alt={`${this.props.alt}`}
        ></img>
      </div>
    );
  }
}
