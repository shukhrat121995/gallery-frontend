import React, { Component } from "react";

export default class AboutInfo extends Component {
  componentDidMount() {
    document.title = "Star Wars Wallpapers | About";
  }
  render() {
    let image;
    if (this.props.display === true) {
      image = (
        <img
          src={require(`../../images/svg/${this.props.svg}`).default}
          alt="svg"
        />
      );
    } else {
      image = null;
    }
    return (
      <div className="about-facts">
        {image}
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}
