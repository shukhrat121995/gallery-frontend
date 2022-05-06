import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import "./Characters.css";

export const UnsplashImage = ({ url, desc, title, rank, id }) => {
  const handleDelete = (e) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/api/category/${id}/`, {
      headers: {
        Authorization: `Token e9006325f054eb38ea61c261514faecd3a1ec129`,
      },
    });
    window.location.reload(false);
  };

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
            onClick={handleDelete}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="3x"
            className="icons"
            onClick={() => window.open(`/edit/${id}`, "_blank")}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};
