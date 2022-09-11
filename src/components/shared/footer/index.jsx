import React from "react"
import "./styles.scss"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Contacts = () => (
  <div className="contact-icon-container d-flex justify-content-center justify-md-content-start justify-content-lg-start">
    <div className="contact-icon text-center">
      <a
        href="https://www.linkedin.com/in/gokul-prabhu-536176102/"
        className="contact-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="contact-icon fa-linkedin" />
      </a>
    </div>
    <div className="contact-icon text-center">
      <a
        href="https://github.com/Gokuldroid/"
        className="contact-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="contact-icon fa-github" />
      </a>
    </div>
    <div className="contact-icon text-center">
      <a
        href="https://www.instagram.com/gokul_supersaiyan/"
        className="contact-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="contact-icon fa-insta" />
      </a>
    </div>
  </div>
);

const Footer = () => (
  <>
    <div className="footer-container container-fluid">
      <div className="row justify-content-sm-center">
        <div className="col-lg-10 col-12">
          <Contacts />
        </div>
        <div className="col-lg-2 col-12">
          <p className="made-by">© 2022, Made by Gokulprabhu</p>
        </div>
      </div>
    </div>
  </>
)

export default Footer
