import React, { Component, Fragment } from "react";

import About from "./About";
import Gallery from "./Gallery";
import { NavLink } from "react-router-dom";
import Slider1 from "../common/images/slider1.jpg";
import Slider2 from "../common/images/slider2.jpg";
import Slider3 from "../common/images/slider3.jpg";

class Home extends Component {
  fromHome = true;
  render() {
    return (
      <Fragment>
          <div id="carouselExampleIndicators" className="carousel slide container-fluid" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={Slider1} alt="slider img"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Slider2} alt="slider img"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={Slider3} alt="slider img"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="container">
          <About fromHome={this.fromHome} />
          <Gallery />
          <NavLink to="/" id="scroll-to-top" className="new-btn-d br-2">
            <i className="fa fa-angle-up"></i>
          </NavLink>
          <div className="row">
            <div className="col-lg-12 col-xs-12">
              <div className="left-contact">
                <h2>Contact Us</h2>
                <div className="media cont-line">
                  <div className="media-left icon-b">
                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                  </div>
                  <div className="media-body dit-right">
                    <h4>Address</h4>
                    <p>Shivajirao S. Jondhale College Of Engineering</p>
                  </div>
                </div>
                <div className="media cont-line">
                  <div className="media-left icon-b">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="media-body dit-right">
                    <h4>Email</h4>
                    <a href="#">demoinfo@gmail.com</a><br/>
                    <a href="#">demoinfo@gmail.com</a>
                  </div>
                </div>
                <div className="media cont-line">
                  <div className="media-left icon-b">
                    <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                  </div>
                  <div className="media-body dit-right">
                    <h4>Phone Number</h4>
                    <a href="#">12345 67890</a><br/>
                    <a href="#">12345 67890</a>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </Fragment>
    );
  }
}

export default Home;
