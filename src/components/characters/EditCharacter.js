import React, { Component } from "react";
import axios from "axios";

export class EditCharacter extends Component {
  componentDidMount() {
    document.title = "Star Wars Edit Character";
  }

  handleFormSubmit = (event, requestType) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const id = window.location.pathname.split("/").pop();

    axios.put(
      `${process.env.REACT_APP_API_URL}/api/category/${id}/`,
      {
        title: title,
        description: description,
      },
      {
        headers: {
          Authorization: `Token e9006325f054eb38ea61c261514faecd3a1ec129`,
        },
      }
    );

    console.log(title, description);
  };

  render() {
    const unique_id = window.location.pathname.split("/").pop();
    return (
      <div className="full-container-contact">
        <div className="form-loading">
          <form
            requestType="put"
            onSubmit={(event) =>
              this.handleFormSubmit(event, this.props.requestType)
            }
          >
            <p>ID: {unique_id}</p>
            <div>
              <input
                name="title"
                type="text"
                placeholder="Title"
                ref={(title) => (this.title = title)}
              ></input>
            </div>
            <div>
              <input
                name="description"
                type="text"
                placeholder="Description"
                ref={(description) => (this.description = description)}
              ></input>
            </div>
            <button className="submit-button" type="submit">
              PUT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditCharacter;
