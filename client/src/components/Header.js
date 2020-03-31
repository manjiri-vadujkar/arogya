import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { deleteJwt } from "../helpers/jwt";
import Logo from "../common/images/logo.png";
import { deleteDoctorState } from "../helpers/doctor";

class Header extends Component {
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
    const menuItems = [
      {
        title: "Home",
        to: "/home",
        show: true
      },
      {
        title: "About Us",
        to: "/about",
        show: true
      },
      {
        title: "Gallery",
        to: "/gallery",
        show: true
      },
      {
        title: "Contact",
        to: "/contact",
        show: true
      },
      {
        title: "Home Remedies",
        to: "/hr",
        show: !this.props.isDoctor
      },
      {
        title: "Profile",
        to: "/patient/profile",
        show: this.props.isLoggedIn && !this.props.isDoctor
      },
      {
        title: "Patients List",
        to: "/doctor/all-patients",
        show: this.props.isLoggedIn && this.props.isDoctor
      },
      {
        title: "Appointments",
        to: "/doctor/all-appointments",
        show: this.props.isLoggedIn && this.props.isDoctor
      },
      {
        title: "Login",
        to: "/patient/login",
        show: !this.props.isLoggedIn
      },
      {
        title: "Logout",
        to: this.props.updateLoggedInState,
        show: this.props.isLoggedIn
      }
    ];
    return (
      <ul className="navbar-nav">
        {menuItems.map((item, index) => {
          return item.show ? (
            <li key={index}>
              {typeof item.to === "string" ? (
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  to={item.to}
                >
                  {item.title}
                </NavLink>
              ) : (
                <a className="nav-link" href="/" onClick={(event) => this.onLogout(event, item.to)}>
                  {item.title}
                </a>
              )}
            </li>
          ) : null;
        })}
      </ul>
    );
  }

  onLogout(event, to) {
    // on logout, delete jwt, update state (i.e. toggle login/logout button and redirect to homepage)
    event.preventDefault();
    deleteJwt();
    deleteDoctorState();
    to();
    this.props.history.push('/');
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

export default withRouter(Header);
