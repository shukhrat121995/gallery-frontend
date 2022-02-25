import React from "react";
import Heading from "../content/Heading";
import { Loader } from "../content/Loader";
import Error from "../content/Error";
import { UnsplashImage } from "../content/UnsplashImage";
import Categories from "../categories/Categories";
import queryString from "query-string";
import "../content/Home.css";
import InfiniteScroll from "react-infinite-scroll-component";

import styled from "styled-components";

import axios from "axios";

const WrapperImages = styled.section``;

class Home extends React.PureComponent {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      images: [],
      hasMore: true,
      offset: 0,
      limit: 30,
      query: "",
      searchbar: "",
    };
    window.onscroll = () => {
      const {
        loadImages,
        state: { error, loading, hasMore },
      } = this;
      if (error || loading || !hasMore) return;
      if (
        document.documentElement.scrollHeight -
          document.documentElement.scrollTop ===
        document.documentElement.clientHeight
      ) {
        loadImages();
      }
    };
    window.SearchBar = this;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this._isMounted = true;
    document.title = "Star Wars Wallpapers | Backgrounds Images - StarWarsArts";
    const values = queryString.parse(this.props.location.search);
    try {
      if (values.query.length > 0) {
        this.loadFromCategories(values.query, values.query);
      } else {
        this.loadImages();
      }
    } catch (e) {
      this.loadImages();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.setState({
      error: false,
      loading: false,
      images: [],
      hasMore: true,
      offset: 0,
      limit: 30,
      query: "",
      searchbar: "",
    });
  }

  componentDidUpdate(prevProps) {
    const values = queryString.parse(this.props.location.search);
    if (
      prevProps.location.key !== this.props.location.key &&
      values.query.length === 0
    ) {
      this.loadFromCategories("", "");
    }
  }

  loadFromCategories = (input = "", search = "") => {
    this.setState({
      error: false,
      loading: false,
      images: [],
      hasMore: true,
      offset: 0,
      limit: 30,
      query: input,
      searchbar: search,
    });
    this.loadImages();
  };

  loadImages = () => {
    this.setState({ loading: true }, () => {
      const { offset, limit } = this.state;
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/search?limit=${limit}&offset=${offset}&query=${this.state.query}`
        )
        .then((res) => {
          const newImages = res.data.images;
          const hasMore = res.data.has_more;
          this.setState({
            hasMore,
            loading: false,
            images: [...this.state.images, ...newImages],
            offset: offset + limit,
          });
        })
        .catch((err) => {
          this.setState({
            error: err.message,
            loading: false,
          });
        });
    });
  };

  render() {
    const { error, hasMore, loading, images, searchbar } = this.state;
    return (
      <>
        <Heading />
        {searchbar.length <= 0 && !error && (
          <Categories loadImages={this.loadFromCategories} />
        )}
        <InfiniteScroll
          dataLength={images.length}
          next={this.loadImages}
          hasMore={hasMore}
        >
          <WrapperImages className="wallpapers-container">
            {images.map((img) => {
              return (
                <UnsplashImage
                  id={img.id}
                  url={img.image_thumbnail}
                  key={Math.random()}
                  title={img.collection}
                  desc={img.description}
                  full={img.image}
                  down={img.image}
                  date={img.upload_time}
                  views={img.views}
                />
              );
            })}
          </WrapperImages>
          {error && <Error image="error.jpg" alt="error" />}
          {loading && !error && <Loader />}
          {!loading && !error && images.length <= 0 && (
            <div>
              <Error image="search.jpg" alt="no results" />
            </div>
          )}
        </InfiniteScroll>
      </>
    );
  }
}

export default Home;
