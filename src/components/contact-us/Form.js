import React, { Component } from "react";
import axios from "axios";
import LoadingBar from "react-top-loading-bar";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
    };
    this.ref = React.createRef();
  }

  notify = () => toast.success("Message sent!", { duration: 5000 });

  handleFormSubmit = (event, requestType) => {
    event.preventDefault();
    const full_name = event.target.elements.full_name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    switch (requestType) {
      case "post":
        this.ref.current.continuousStart();

        axios
          .post(`${process.env.REACT_APP_API_URL}/api/contact-us`, {
            full_name: full_name,
            email: email,
            message: message,
          })
          .then((res) => {
            if (res.status === 201) {
              this.ref.current.complete();
              this.setState({ success: true });
              this.full_name.value = "";
              this.email.value = "";
              this.message.value = "";
            }
          })
          .catch((error) => console.log(error));
        break;
      default: // do nothing
    }
  };

  render() {
    return (
      <>
        <LoadingBar
          className="form-loading"
          color="#1888ff"
          height={4}
          ref={this.ref}
          onLoaderFinished={this.notify}
        />
        <Toaster position="bottom-right" />
        <h1>Drop us a line</h1>
        <form
          onSubmit={(event) =>
            this.handleFormSubmit(event, this.props.requestType)
          }
        >
          <input
            name="full_name"
            type="text"
            placeholder="Full Name"
            ref={(full_name) => (this.full_name = full_name)}
          ></input>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            ref={(email) => (this.email = email)}
          ></input>
          <input
            name="message"
            type="text"
            placeholder="Message"
            ref={(message) => (this.message = message)}
          ></input>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Form;
