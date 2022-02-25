import React, { Component } from "react";
import AboutHero from "../about/AboutHero";
import Contact from "../contact-us/Contact";

export class ContactUs extends Component {
  componentDidMount() {
    document.title = "Star Wars Wallpapers | Contact-Us";
  }
  render() {
    return (
      <>
        <AboutHero
          greeting="Want to contact with Force?"
          description="Simply fill out the form and submit it"
          background="contact-us.png"
        />
        <Contact />
      </>
    );
  }
}

export default ContactUs;
