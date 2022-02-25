import React from "react";
import Footer from "../components/footer";
import { Icon } from "../components/icons/styles/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link
              href="https://shukhrat121995.github.io/cv/"
              target="_blank"
            >
              Author
            </Footer.Link>
            <Footer.Link
              href="https://geekart.club/general/the-history-of-geekart/"
              target="_blank"
            >
              Story
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Hot Links</Footer.Title>
            <Footer.Link href="/">Home</Footer.Link>
            <Footer.Link href="/about">About</Footer.Link>
            <Footer.Link href="/characters">Characters</Footer.Link>
            <Footer.Link href="/contact-us">Contact us</Footer.Link>
            <Footer.Link href="/license">License</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link
              href="https://www.facebook.com/groups/advancedgeeks"
              target="_blank"
            >
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link
              href="https://www.instagram.com/advancedgeeks/"
              target="_blank"
            >
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link
              href="https://www.youtube.com/channel/UCz4Pli6Cyw4IDtIZ1GEcNFg"
              target="_blank"
            >
              <Icon className="fab fa-youtube" />
              YouTube
            </Footer.Link>
            <Footer.Link href="https://t.me/geekartclub" target="_blank">
              <Icon className="fab fa-telegram" />
              Telegram
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link
              href="https://goo.gl/maps/uhxMZJmYE1CPh2x8A"
              target="_blank"
            >
              <Icon className="fas fa-map-marker-alt" />
              Oulu, Finland
            </Footer.Link>
            <Footer.Link href="mailto:shux121995@gmail.com">
              <Icon className="far fa-envelope" />
              shux121995@gmail.com
            </Footer.Link>
            <Footer.Link
              href="https://goo.gl/maps/ZJ9yfxRagsr6EoTE9"
              target="_blank"
            >
              <Icon className="fas fa-map-marker-alt" />
              Incheon, South Korea
            </Footer.Link>
            <Footer.Link href="mailto:nazarov7mu@gmail.com">
              <Icon className="far fa-envelope" />
              nazarov7mu@gmail.com
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
