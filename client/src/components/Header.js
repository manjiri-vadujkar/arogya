import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../common/images/logo.png";

class Header extends Component {
  menuItems = [
    {
      title: "Home",
      to: "/home"
    },
    {
      title: "About Us",
      to: "/about"
    },
    {
      title: "Gallery",
      to: "/gallery"
    },
    {
      title: "Login",
      to: "/login"
    },
    {
      title: "Profile",
      to: "/profile"
    },
    {
      title: "Contact",
      to: "/contact"
    }
  ];

  socialItems = [
    {
      icon: "fa-facebook",
      href: "https://www.fb.com"
    },
    {
      icon: "fa-twitter",
      href: "https://www.twitter.com"
    },
    {
      icon: "fa-instagram",
      href: "https://www.instagram.com"
    },
    {
      icon: "fa-youtube-play",
      href: "https://www.youtube.com"
    }
  ];

  buildMenu() {
    return (
      <ul className="navbar-nav">
        {this.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className="nav-link"
                activeClassName="active"
                to={item.to}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }

  buildSocialMenu() {
    return (
      <ul className="social-nav">
        {this.socialItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>
                <i className={`fa ${item.icon}`} aria-hidden="true"></i>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <header className="header-container">
        <div className="main-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="left-top">
                  <NavLink className="new-btn-d br-2" to="/">
                    <span>Book Appointment</span>
                  </NavLink>
                  <a className="new-btn-d br-2" href="mailto:demo@gmail.com">
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="wel-nots">
                  <p>Welcome to Arogya!</p>
                </div>
                <div className="right-top">{this.buildSocialMenu()}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-header">
          <nav className="navbar header-nav navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar-wd"
                aria-controls="navbar-wd"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbar-wd"
              >
                {this.buildMenu()}
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
