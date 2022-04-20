import React from "react";
import Heading from "../content/Heading";
import { Loader } from "../content/Loader";
import { UnsplashImage } from "../content/UnsplashImage";
import InfiniteScroll from "react-infinite-scroll-component";

import styled from "styled-components";

import axios from "axios";

const WrapperImages = styled.section`
  display: grid;
  margin: 1rem;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const search = window.location.search;
const params = new URLSearchParams(search);

class Search extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      images: [],
      hasMore: true,
      offset: 0,
      limit: 30,
      query: params.get("query").toLocaleLowerCase(),
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
  }

  componentDidMount() {
    document.title = "Star Wars Wallpapers | Search";
    this.loadImages();
  }

  loadImages = () => {
    this.setState({ loading: true }, () => {
      const { offset, limit, query } = this.state;
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/search?limit=${limit}&offset=${offset}&query=${query}`
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
    const { error, hasMore, loading, images } = this.state;

    return (
      <>
        <Heading greeting={this.state.query} />
        <InfiniteScroll
          dataLength={images.length}
          next={this.loadImages}
          hasMore={hasMore}
          loader={<Loader />}
        >
          <WrapperImages>
            {images.map((img) => {
              return (
                <UnsplashImage
                  url={img.image_thumbnail}
                  key={Math.random()}
                  desc={img.collection.title}
                  full={img.image}
                  down={img.image}
                />
              );
            })}
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
          </WrapperImages>
        </InfiniteScroll>
      </>
    );
  }
}

export default Search;
