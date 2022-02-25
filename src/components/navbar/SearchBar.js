import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SearchBar.css";
import validator from "validator";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: "Search Star Wars Images",
      search: "",
    };

    this.onInputchange = this.onInputchange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.photo !== "Search Star Wars Images") {
      this.setState({
        search: this.state.photo,
      });
      this.props.history.push(`/?query=${this.state.photo}`);
      if (this.state.search !== this.state.photo) {
        window.SearchBar.loadFromCategories(
          `${this.state.photo}`.toLocaleLowerCase(),
          `${this.state.photo}`.toLocaleLowerCase()
        );
        this.setState({
          photo: "Search Star Wars Images",
          search: "",
        });
      }
    }
  };

  onInputchange(event) {
    this.setState({
      photo: validator.trim(event.target.value),
    });
  }

  render() {
    return (
      <>
        <form className="form-search" onSubmit={this.handleSubmit}>
          <button className="searchButton">
            <i className="fa fa-search"></i>
          </button>
          <input
            className="input-search"
            type="search"
            name="query"
            placeholder={this.state.photo}
            onChange={this.onInputchange}
            required
            maxLength="15"
          ></input>
        </form>
      </>
    );
  }
}

export default withRouter(SearchPage);
