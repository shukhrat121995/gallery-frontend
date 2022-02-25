import React, { PureComponent } from "react";
import "./LicensePage.css";

export default class LicensePage extends PureComponent {
  render() {
    return (
      <div className="license-container">
        <div className="title-centered">
          <h2>Disclaimer</h2>
          <p>
            This site is not endorsed by Lucasfilm Ltd. or Disney and is
            intended for entertainment and information purposes only. The
            official Star Wars site can be found at www.starwars.com. Star Wars,
            the Star Wars logo, all names and pictures of Star Wars characters,
            vehicles and any other Star Wars related items are registered
            trademarks and/or copyrights of Lucasfilm Ltd., or their respective
            trademark and copyright holders. All rights reserved. Any usage of
            Star Wars materials, stock photos, and the like are used under the
            “Fair Use” act, concurrent with internet “Public Domain.”
          </p>
        </div>
        <div className="title-centered">
          <h2>Tell your story with imagery</h2>
          <p>
            Some of the use cases for which you can use photos and videos from
            Star Wars Arts.
          </p>
        </div>
        <div className="full-container">
          <div className="image-text-container">
            <img
              className="image-text-container__image"
              src={require("../../images/website.jpg").default}
              alt="website"
            />
            <div className="image-text-container__content">
              <h4>On your website, blog or app</h4>
              <p>
                Use the photos and videos online – whether it’s a website,
                e-commerce shop, newsletter, e-book, presentation, blog. Just
                honour the author.
              </p>
            </div>
          </div>
          <div className="image-text-container">
            <img
              className="image-text-container__image"
              src={require("../../images/promotion.jpg").default}
              alt="promotion"
            />
            <div className="image-text-container__content">
              <h4>Wallpapers for smartphones</h4>
              <p>
                Use the photos from this website as wallpapers for your
                smartphones. Make your phone look unique!
              </p>
            </div>
          </div>
          <div className="image-text-container">
            <img
              className="image-text-container__image"
              src={require("../../images/prints.jpg").default}
              alt="prints"
            />
            <div className="image-text-container__content">
              <h4>Wallpapers for PCs and Laptops</h4>
              <p>
                Use high-quality photos from this website as wallpapers for your
                desktop and laptop computers.
              </p>
            </div>
          </div>
          <div className="image-text-container">
            <img
              className="image-text-container__image"
              src={require("../../images/social-media.jpg").default}
              alt="social-media"
            />
            <div className="image-text-container__content">
              <h4>Share them on social media</h4>
              <p>
                Grow your audience by posting authentic and engaging photos and
                videos on social media like Facebook, Instagram or YouTube.
              </p>
            </div>
          </div>
        </div>
        <div className="title-centered">
          <h2>What is not allowed?</h2>
          <p>
            Respect the hard work of our contributors and keep these
            restrictions in mind.
          </p>
        </div>
        <ul className="list-custom">
          <li>
            <img
              className="license-red-cross"
              src={require("../../images/svg/red-cross.svg").default}
              alt="red-cross"
            />
            <span>
              Identifiable people may not appear in a bad light or in a way that
              is offensive.
            </span>
          </li>
          <li>
            <img
              className="license-red-cross"
              src={require("../../images/svg/red-cross.svg").default}
              alt="red-cross"
            />
            <span>
              Don't sell unaltered copies of a photo or video, e.g. as a poster,
              print or on a physical product.
            </span>
          </li>
          <li>
            <img
              className="license-red-cross"
              src={require("../../images/svg/red-cross.svg").default}
              alt="red-cross"
            />
            <span>
              Don't imply endorsement of your product by people or brands on the
              imagery.
            </span>
          </li>
          <li>
            <img
              className="license-red-cross"
              src={require("../../images/svg/red-cross.svg").default}
              alt="red-cross"
            />
            <span>
              Don't redistribute or sell the photos and videos on other stock
              photo or wallpaper platforms.
            </span>
            <img
              className="license-red-cross"
              src={require("../../images/svg/red-cross.svg").default}
              alt="red-cross"
            />
            <span>
              Don't modify the photos and videos from Star Wars Arts. Contact
              the artists for more info.
            </span>
          </li>
        </ul>
      </div>
    );
  }
}
