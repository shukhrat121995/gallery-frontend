import React from "react";
import "./About.css";

export default class AboutHero extends React.Component {
  render() {
    return (
      <section
        className="about-hero"
        style={{
          backgroundImage:
            "url(" +
            require(`../../images/${this.props.background}`).default +
            ")",
        }}
      >
        <div className="about-text">
          <h1>{this.props.greeting || "Empowering Creators"}</h1>
          <h3>
            {this.props.description ||
              "“ Your focus determines your reality.” – Qui-Gon Jinn."}
          </h3>
        </div>
      </section>
    );
  }
}
