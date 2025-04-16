import React from "react";
import FooterLinks from "../links/FooterLinks.jsx";

import linksConfig from "../__mocks__/linksConfig.js";


function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-description">
            <div className="logo">
              <a href="/"><img src="/public/logo.svg" alt="Logo" /></a>
            </div>
            <div>
              <span>Takeaway & Delivery template for small - medium businesses.</span>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-grid">
              {linksConfig.footerLinks.map((section, index) => (
                <FooterLinks key={index} title={section.title} links={section.links} />
              ))}
            </div>
          </div>
        </div>

        <span className="footer-line"></span>

        <div className="footer-copyrights">
          <span>Built by <a href="/">Flowbase</a>. Powered by <a href="/">Webflow</a></span>
          <div className="footer-media">
            <ul>
              <li><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
              <li><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="/"><i className="fa-brands fa-youtube"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;