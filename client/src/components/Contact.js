import React, { Component } from "react";
import "../common/css/custom.css"

class Contact extends Component {
  render() {
    return (
      <div className="container contact-box">
        <div className="title-box">
          <h2>Contact Us</h2>
          <p>
            Get in touch now and start your journey to become your healtiest self
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xs-6 half-l">
            <div className="container">
              <div className="row left-contact">
                <h2>Contact Info</h2>
              </div>
  
                <div className="row contact">
                <div className="col-lg-2 col-xs-12 media-left icon-b">
                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                  </div>
                  <div className="col-lg-10 col-xs-12 media-body dit-right">
                    <h4>Address</h4>
                    <p>Shivajirao S. Jondhale College Of Engineering</p>
                  </div>
                </div>

                <div className="row contact">
                  <div className="col-lg-2 col-xs-12 media-left icon-b">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="col-lg-10 col-xs-12 media-body dit-right">
                    <h4>Email</h4>
                    <a href="mailto:demoinfo@gmail.com">demoinfo@gmail.com</a><br/>
                    <a href="mailto:demoinfo@gmail.com">demoinfo@gmail.com</a>
                  </div>
                </div>

                  <div className="row contact">
                    <div className="col-lg-2 col-xs-12 media-left icon-b">
                      <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                    </div>
                    <div className="col-lg-10 col-xs-12 media-body dit-right">
                      <h4>Phone Number</h4>
                      <a href="tel:1234567890">12345 67890</a><br/>
                      <a href="tel:1234567890">12345 67890</a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-6 col-xs-6 half-r">
            <div className="row left-contact">
                <h2>Map</h2>
              </div>
              <div className="row map">
              <iframe title="map" align="center" height="450px" width="500px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.937032805619!2d73.10609541473164!3d19.197952387018052!2m3!1f0!2f0!3f0!3m2!
                1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795757569a46b%3A0x864b94d61f571b24!2sShivajirao%20S.%20Jondhale%20College%20of%20Engineering!5e0!3m2!1sen!2sin!
                4v1583731567469!5m2!1sen!2sin">
              </iframe>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Contact;
