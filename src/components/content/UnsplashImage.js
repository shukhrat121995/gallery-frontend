import React, { useState } from "react";
import styled from "styled-components";
import "./Image.css";
import axios from "axios";

import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "./LightBox.css";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
  display: block;
`;

export const UnsplashImage = ({
  id,
  url,
  title,
  desc,
  down,
  full,
  date,
  views,
}) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const incrementViews = () => {
    console.log(id);
    axios.patch(`${process.env.REACT_APP_API_URL}/api/wallpaper/${id}/`, {
      option: "inc-views",
    });
  };

  return (
    <>
      <div className="container">
        <Img
          src={url}
          onClick={() => {
            handleClick();
            incrementViews();
          }}
        />
        <a
          href={down + "?force=true"}
          download
          title="download"
          style={{ zIndex: 999 }}
        >
          <i className="fas fa-arrow-down"></i>
        </a>
        <div>
          <p
            style={{ textTransform: "capitalize", marginBottom: "2rem" }}
            className="title"
            onClick={() => {
              handleClick();
              incrementViews();
            }}
          >
            {title}
          </p>
          <p className="title" style={{ marginBottom: "1rem" }}>
            <i className="far fa-eye"></i>&nbsp;&nbsp;{views}
          </p>
        </div>
        <span className="title">{date}</span>
        <div
          className="overlay"
          onClick={() => {
            handleClick();
            incrementViews();
          }}
        ></div>
        <div
          className="overlay-top"
          onClick={() => {
            handleClick();
            incrementViews();
          }}
        ></div>
      </div>
      <div className={click ? "lightbox-container-open" : "lightbox-container"}>
        <Lightbox image={full} title={desc} onClose={handleClick}></Lightbox>
      </div>
    </>
  );
};
