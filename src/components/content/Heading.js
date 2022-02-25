import React from "react";
import styled from "styled-components";

const Header = styled.header`
  margin-top: 70px;
  margin-right: 1rem;
  margin-left: 1rem;
  text-align: left;
`;

export default class Heading extends React.Component {
  render() {
    return (
      <Header>
        <h1 style={{ textTransform: "capitalize" }}>
          {this.props.greeting || "HD and 4K Wallpapers and Arts"}
        </h1>
        <p>
          {this.props.description ||
            "Search your favorite Star Wars characters..."}
        </p>
      </Header>
    );
  }
}
