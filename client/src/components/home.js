import React, { Component, Fragment } from "react";

import About from "./About";
import Gallery from "./Gallery";
import { NavLink } from "react-router-dom";

class Home extends Component {
  fromHome = true;
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1>Home</h1>
          <div>It also renders about and gallery</div>
          <About fromHome={this.fromHome} />
          <Gallery />
          <NavLink to="/" id="scroll-to-top" className="new-btn-d br-2">
            <i className="fa fa-angle-up"></i>
          </NavLink>
        </div>
      </Fragment>
    );
  }
}

export default Home;
