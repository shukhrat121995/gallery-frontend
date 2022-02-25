import React, { useEffect } from "react";
import AboutHero from "../about/AboutHero";
import AboutInfo from "../about/AboutInfo";

export default function About() {
  useEffect(() => {
    document.title = "Star Wars Wallpapers | About";
  }, []);

  return (
    <>
      <AboutHero background="about.png" />
      <AboutInfo
        title="About Us"
        description="Star Wars Arts provides high quality and astonishing wallpapers and arts. 
        All photos are nicely tagged, searchable and also easy to discover through our discover pages."
        display={false}
      />
      <AboutInfo
        title="Photos"
        description="We have hundreds photos and every day new high resolution photos will be added. 
        All photos are hand-picked from photos uploaded by our users or sourced from free image websites."
        svg="photos.svg"
        display={true}
      />
      <AboutInfo
        title="Photo Sources"
        description="We use sources like VK, ArtStation, DeviantArt, Pinterest to search for arts.
        We constantly try to deliver as many high photos as possible to the creatives who use our website."
        svg="camera.svg"
        display={true}
      />
      <AboutInfo
        title="Team"
        description="Star Wars Arts is run by Shukhrat Mirrakhimov and Javokhir Nazarov. 
        Shukhrat and Javokhir co-founded Star Wars Arts together in 2017."
        svg="team.svg"
        display={true}
      />
      <AboutInfo
        title="Mission"
        description="This site is created by fans for fans. It would continue legacy of GeekArt by delivering high-quality and astonishing arts and wallpapers, divided by categories and ready for download."
        svg="mission.svg"
        display={true}
      />
    </>
  );
}
