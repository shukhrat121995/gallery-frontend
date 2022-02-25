import React, { Component } from "react";
import "./Contact.css";
import Form from "./Form";

export class Contact extends Component {
  render() {
    return (
      <div className="full-container-contact">
        <div className="contact-container">
          <div className="form-container">
            <div className="input-form">
              <Form requestType="post" />
            </div>
          </div>
          <div className="image-container">
            <img
              className="image"
              src={require("../../images/clone-trooper.png").default}
              alt="rey"
            />
          </div>
        </div>
        <iframe
          className="map-location"
          title="OULU University, Finland"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13460.206731322787!2d25.462001964444827!3d65.05772966614396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46802d0fee05afb3%3A0xe8963f6b08a1eba1!2sUniversity%20of%20Oulu!5e0!3m2!1sen!2s!4v1610022779839!5m2!1sen!2s"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    );
  }
}

export default Contact;
