import React from "react"
import "./styles.scss"
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Contacts = () => (
  <div className="contact-icon-container d-flex justify-content-start">
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
      <div className="row">
        <div className="col-10">
          <Contacts />
        </div>
        <div className="col-2">
          <p className="made-by">© 2022, Made by Gokulprabhu</p>
        </div>
      </div>
    </div>
  </>
)

export default Footer
