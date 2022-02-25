import React, { PureComponent } from "react";
import AboutHero from "../about/AboutHero";
import LicensePage from "../license/LicensePage";

export default class Licence extends PureComponent {
  componentDidMount() {
    document.title = "Star Wars Wallpapers | License";
  }
  render() {
    return (
      <>
        <AboutHero
          greeting="Legal Simplicity"
          description="All logos/images/names/arts are copyrights of their perspective owners."
          background="license.png"
        />
        <LicensePage />
      </>
    );
  }
}
