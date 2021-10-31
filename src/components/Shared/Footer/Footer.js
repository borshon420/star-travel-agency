import React from "react";
import "./Footer.css";
import footerLogo from "../../../images/logo/logo.png";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <Container className="footer-container-2">
          <div>
            <img style={{ height: "100px" }} src={footerLogo} alt="" />
          </div>
          <div>
            <div className="mb-3 me-2">
              <h5>Excursions</h5>
              <hr />
            </div>
            <p>Prague</p>
            <p>Lisbon</p>
            <p>Venice</p>
            <p>Budapest</p>
            <p>Milan</p>
          </div>
          <div>
            <div className="mb-3 me-2">
              <h5>Popular Tours</h5>
              <hr />
            </div>
            <p>KraKaw</p>
            <p>Malaga</p>
            <p>Moscow</p>
            <p>Lisbon</p>
            <p>Florence</p>
          </div>
          <div>
            <div className="mb-3 me-2">
              <h5>Exclusive Tours</h5>
              <hr />
            </div>
            <p>Amsterdam</p>
            <p>Madrid</p>
            <p>Bangkok</p>
            <p>Barcelona</p>
            <p>Prague</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
