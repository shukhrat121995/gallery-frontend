import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import ReactHtmlParser from "react-html-parser";
import "./Characters.css";

export const UnsplashImage = ({ url, desc, title, rank }) => {
  return (
    <div className="main-container">
      <div className="character-container">
        <img className="character-image" src={url} alt={title} />
        <div className="character-description">
          <h3>
            {rank}. {title}
          </h3>
          <div>{ReactHtmlParser(desc)}</div>
        </div>
      </div>
      <div className="control-icons">
        <div className="inner-icons">
          <FontAwesomeIcon
            icon={faTrashCan}
            size="3x"
            className="icons"
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="3x"
            className="icons"
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};
