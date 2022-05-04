import React, { Component } from "react";

export class EditCharacter extends Component {
  componentDidMount() {
    document.title = "Star Wars Edit Character";
  }
  render() {
    const unique_id = window.location.pathname.split("/").pop();
    return (
      <div className="full-container-contact">
        <div className="form-loading">
          <form>
            <p>ID: {unique_id}</p>
            <div>
              <input name="title" type="text" placeholder="Title"></input>
            </div>
            <div>
              <input
                name="description"
                type="text"
                placeholder="Description"
              ></input>
            </div>
            <div>
              <input name="image" type="file" placeholder="Image"></input>
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
