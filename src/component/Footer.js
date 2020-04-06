import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="social-link">
          <h2> Let's Get Connect</h2>
          <div className="mainSocialLink">
            <a
              target="_black"
              href="https://www.facebook.com/bathandbodyworks"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              target="_black"
              href="https://www.instagram.com/bathandbodyworks/"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              target="_black"
              href="https://www.pinterest.com/bathbodyworks/"
              className="pinterest social"
            >
              <FontAwesomeIcon icon={faPinterest} size="2x" />
            </a>
            <a
              target="_black"
              href="https://www.youtube.com/user/bathandbodyworks/"
              className="youtube social"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
