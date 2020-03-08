import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import About1 from "../common/images/about1.jpg";

class About extends Component {
  render() {
    return (
      <div id="about" className="about-box">
        <div className="about-a1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="title-box">
                  <h2>About Us</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row align-items-center about-main-info">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h2> Welcome to Arogya </h2>
                    <p>
                      Fusce convallis ante id purus sagittis malesuada. Sed erat
                      ipsum, suscipit sit amet auctor quis, vehicula ut leo.
                      Maecenas felis nulla, tincidunt ac blandit a, consectetur
                      quis elit. Nulla ut magna eu purus cursus sagittis.
                      Praesent fermentum tincidunt varius. Proin sit amet tempus
                      magna. Fusce pellentesque vulputate urna.{" "}
                    </p>
                    <p>
                      Fusce convallis ante id purus sagittis malesuada. Sed erat
                      ipsum, suscipit sit amet auctor quis, vehicula ut leo.
                      Maecenas felis nulla, tincidunt ac blandit a, consectetur
                      quis elit. Nulla ut magna eu purus cursus sagittis.
                      Praesent fermentum tincidunt varius. Proin sit amet tempus
                      magna. Fusce pellentesque vulputate urna.{" "}
                    </p>
                    <NavLink to="/" className="new-btn-d br-2">
                      Read More
                    </NavLink>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="about-m" id="banner">
                      <img src={About1} alt="about-us-1"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
