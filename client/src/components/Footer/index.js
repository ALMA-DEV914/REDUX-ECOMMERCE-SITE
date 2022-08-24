import {
  faAddressBook,
  faEnvelope,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faFacebookF, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer">
        <div className="column">
          <h5>About</h5>
          <p>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo.{" "}
          </p>
        </div>
        <div className="column">
          <h5>
            <FontAwesomeIcon icon={faAddressBook} /> Contact
          </h5>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> aungonalna58@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneVolume} /> +1 7757425989
          </p>
          <p>Copyright reserved@2022 Alma's Productions</p>
        </div>
        <div className="column">
          <p>Follow us on the following sites</p>
          <FontAwesomeIcon icon={faFacebookF} className="icon" />

          <FontAwesomeIcon icon={faGithub} className="icon" />

          <FontAwesomeIcon icon={faTwitter} className="icon" />

          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <p>Subscribe to stay updated for new products</p>
          <div className="subscribe-form">
            <input type="text" placeholder="example@gmail.com"></input>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
