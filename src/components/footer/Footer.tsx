import React from "react";
import FooterLinks from "../links/FooterLinks";
import Logo from "/public/logo.svg?react";
import linksConfig from "../__mocks__/linksConfig.js";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { PiYoutubeLogo } from "react-icons/pi";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-description">
            <div className="logo">
              <a href="/">
                <Logo />
              </a>
            </div>
            <div>
              <span>Takeaway & Delivery template for small - medium businesses.</span>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-grid">
              {linksConfig.footerLinks.map((section: { title: string; links: { name: string; href: string }[] }, index: number) => (
                <FooterLinks key={index} title={section.title} links={section.links} />
              ))}
            </div>
          </div>
        </div>

        <span className="footer-line"></span>

        <div className="footer-copyrights">
          <span>
            Built by <a href="/">Flowbase</a>. Powered by <a href="/">Webflow</a>
          </span>
          <div className="footer-media">
            <ul>
              <li>
                <a href="/"><CiTwitter /></a>
              </li>
              <li>
                <a href="/"><IoLogoInstagram /></a>
              </li>
              <li>
                <a href="/"><PiYoutubeLogo /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;