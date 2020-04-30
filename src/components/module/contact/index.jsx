import React, { Component } from 'react'
import Header from "@components/shared/header"
import { FaLinkedin, FaInstagram, FaGithub, FaPhone } from "react-icons/fa";

import './styles.scss';

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header/>
        <div className="contacts-container card">
          <img src="/assets/contact/profile_pic.png" alt="gokul prabhu" className="profile-pic mx-auto d-block"/>
          <div className="row icon-container">
            <div className="col text-center">
              <a href="https://www.linkedin.com/in/gokul-prabhu-536176102/" className="contact-link" target="_blank">
                <FaLinkedin className="contact-icon fa-linkedin"/>
              </a>
            </div>
            <div className="col text-center">
              <a href="https://github.com/Gokuldroid/" className="contact-link" target="_blank">
                <FaGithub className="contact-icon fa-github"/>
              </a>
            </div>
            <div className="col text-center">
              <a href="https://www.instagram.com/gokul_supersaiyan/" className="contact-link" target="_blank">
                <FaInstagram className="contact-icon fa-insta"/>
              </a>
            </div>
            <div className="col text-center">
              <a href="tel:+919659172403" className="contact-link" target="_blank">
                <FaPhone className="contact-icon fa-phone"/>
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
