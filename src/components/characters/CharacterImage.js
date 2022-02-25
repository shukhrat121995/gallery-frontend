import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./Characters.css";

export const UnsplashImage = ({ url, desc, title, rank }) => {
  return (
    <div className="character-container">
      <img className="character-image" src={url} alt={title} />
      <div className="character-description">
        <h3>
          {rank}. {title}
        </h3>
        <div>{ReactHtmlParser(desc)}</div>
      </div>
    </div>
  );
};
