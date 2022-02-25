import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Categories.css";

function Categories(props) {
  const [categories, setCategory] = useState([]);
  const [active, setActive] = useState("all");
  const categories_ref = useRef(null);
  const left_arrow = useRef(null);
  const right_arrow = useRef(null);

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCategories = () => {
    const apiRoot = `${process.env.REACT_APP_API_URL}/api/category`;
    axios.get(`${apiRoot}`).then((res) => {
      setCategory([...categories, ...res.data]);
    });
  };

  const activeButton = (id) => {
    setActive(id);
  };

  const handleNav = (direction) => {
    if (direction === "left") {
      categories_ref.current.scrollLeft -= 200;
    } else {
      categories_ref.current.scrollLeft += 200;
    }
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollWidth - e.target.scrollLeft < e.target.clientWidth + 1;
    /*console.log(e.target.scrollLeft);*/
    /*console.log(e.target.scrollWidth - e.target.scrollLeft);
    console.log(e.target.clientWidth);*/
    if (bottom) {
      right_arrow.current.style.visibility = "hidden";
    } else {
      right_arrow.current.style.visibility = "visible";
    }
    if (e.target.scrollLeft === 0) {
      left_arrow.current.style.visibility = "hidden";
    } else {
      left_arrow.current.style.visibility = "visible";
    }
  };

  return (
    <div
      className="image_wrapper"
      onScroll={handleScroll}
      ref={categories_ref}
      style={{ scrollBehavior: "smooth" }}
    >
      <div
        className="arrow-shadow-left"
        ref={left_arrow}
        style={{ visibility: "hidden" }}
      >
        <img
          src={require(`../../images/svg/arrow-left.svg`).default}
          alt="svg"
          style={{ height: 32, padding: 5 }}
          onClick={() => handleNav("left")}
        />
      </div>
      <button
        id="all-categories"
        className={
          active === "all" ? "link_categories active-on" : "link_categories"
        }
        key="all"
        onClick={() => {
          props.loadImages("");
          activeButton("all");
        }}
      >
        all
      </button>
      {categories.map((category) => (
        <button
          className={
            active === `${category.title}`
              ? "link_categories active-on"
              : "link_categories"
          }
          id={category.title}
          key={Math.random()}
          onClick={() => {
            props.loadImages(category.title);
            activeButton(category.title);
          }}
        >
          {category.title}
        </button>
      ))}
      <div className="arrow-shadow-right" ref={right_arrow}>
        <img
          src={require(`../../images/svg/arrow-right.svg`).default}
          alt="svg"
          style={{ height: 32, padding: 5, float: "right" }}
          onClick={() => handleNav("right")}
        />
      </div>
    </div>
  );
}

export default Categories;
