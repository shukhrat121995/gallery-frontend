import React, { useState, useEffect } from "react";
import { Loader } from "../content/Loader";
import { UnsplashImage } from "../characters/CharacterImage";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import axios from "axios";
import "../characters/Characters.css";
import AboutHero from "../about/AboutHero";
import Error from "../content/Error";

const WrapperImages = styled.section``;

export default function Characters() {
  const [images, setImage] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    document.title = "Star Wars Wallpapers | Characters";
    const fetchImages = () => {
      const apiRoot = `${process.env.REACT_APP_API_URL}/api/characters`;
      //const accessKey = process.env.REACT_APP_ACCESSKEY;

      axios
        .get(`${apiRoot}`)
        .then((res) => {
          if (mounted) {
            setImage([...images, ...res.data]);
          }
        })
        .catch((err) => {
          setError(true);
        });
    };
    fetchImages();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AboutHero
        greeting="The Best Star Wars characters from the Star Wars Arts team"
        description="From scavengers to the most dangerous Jedi and Sith ever, our updated ranking of the heroes and villains in a galaxy far, far away"
        background="characters.png"
      />
      {error && <Error image="error.jpg" alt="error" />}
      {error || (
        <div className="characters-intro">
          There are plenty of Star Wars character rankings on the web.{" "}
          <a href="https://www.rollingstone.com/movies/movie-lists/50-best-star-wars-characters-of-all-time-145533/">
            Rolling Stone
          </a>
          ,{" "}
          <a href="https://www.esquire.com/entertainment/movies/g30316032/best-star-wars-characters/">
            Esquire
          </a>
          ,{" "}
          <a href="https://www.youtube.com/channel/UCo1bmdhnhLKvLAQWXSn92Wg">
            Thor Skywalker
          </a>{" "}
          – they all based the rankings on different reasons, polls, or just
          subjective opinions. We also decided not to stand aside and make our
          Top 30 characters and base categories upon this rating.
          <p>
            <i>Note: Character descriptions are based on fan’s comments.</i>
          </p>
        </div>
      )}

      <InfiniteScroll
        dataLength={images.length}
        next={useEffect.fetchImages}
        hasMore={false}
        loader={<Loader />}
      >
        <WrapperImages className="wrapper-image">
          {images.map((image) => (
            <UnsplashImage
              url={image.image}
              key={Math.random()}
              rank={image.rank}
              title={image.title}
              desc={image.description}
            />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </>
  );
}
