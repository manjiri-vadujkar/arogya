import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import About1 from "../common/images/about1.jpg";

class About extends Component {
  render() {
    return (
      <div id="about" className="about-box">
        <div className="about-a1">
          <div className={!this.props.fromHome ? "container" : null}>
            <div className="row">
              <div className="col-lg-12">
                <div className="title-box">
                  <h2>About Us</h2>
                  <p>
                    Learn More About Us{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row align-items-center about-main-info">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <h2> Welcome to Arogya </h2>
                    <p className='aboutusp'>
                      Fusce convallis ante id purus sagittis malesuada. Sed erat
                      ipsum, suscipit sit amet auctor quis, vehicula ut leo.
                      Maecenas felis nulla, tincidunt ac blandit a, consectetur
                      quis elit. Nulla ut magna eu purus cursus sagittis.
                      Praesent fermentum tincidunt varius. Proin sit amet tempus
                      magna. Fusce pellentesque vulputate urna.{" "}
                    </p>
                    <p className='aboutusp'>
                      Fusce convallis ante id purus sagittis malesuada. Sed erat
                      ipsum, suscipit sit amet auctor quis, vehicula ut leo.
                      Maecenas felis nulla, tincidunt ac blandit a, consectetur
                      quis elit. Nulla ut magna eu purus cursus sagittis.
                      Praesent fermentum tincidunt varius. Proin sit amet tempus
                      magna. Fusce pellentesque vulputate urna.Sed mollis ex id 
                      nunc scelerisque placerat. In dignissim arcu a nulla 
                      laoreet, nec ornare ligula ultrices. Proin posuere 
                      imperdiet laoreet. Ut accumsan purus nibh, ut maximus ex 
                      venenatis in.Sed rutrum massa at egestas vulputate. Sed 
                      molestie vel metus eget auctor. Sed sit amet nisl quis 
                      eros pellentesque suscipit ultrices non erat.{" "}
                    </p>
                    {this.props.fromHome ? (
                      <NavLink to="/about" className="new-btn-d br-2">
                        Read More
                      </NavLink>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="about-m" id="banner">
                      <img src={About1} alt="about-us-1"></img>
                    </div>
                  </div>
                  {!this.props.fromHome && (
                    <div className='only-aboutus'>
                      <p className='aboutusp'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Maecenas ut efficitur ipsum. Mauris non dolor pretium, efficitur ante 
                      vitae, consequat turpis. Aenean laoreet malesuada ligula non pretium. 
                      Nunc suscipit urna eros, at congue ligula tempus vel. Donec lorem 
                      elit, venenatis ac massa mattis, consequat euismod tellus. Sed non 
                      arcu tempor, semper lacus a, scelerisque sem. Quisque eleifend risus 
                      iam rhoncus, vel ultricies enim bibendum. Sed commodo sapien et 
                      sapien malesuada imperdiet. Maecenas et dolor nec dolor finibus 
                      commodo in a odio. Nam eleifend diam libero, et semper nisl porta 
                      non. Aenean auctor bibendum nibh, a condimentum risus luctus eu. 
                      Sed pretium tellus a risus rhoncus, eget tincidunt felis faucibus. 
                      Donec dapibus enim nec sapien malesuada suscipit. Phasellus 
                      hendrerit pharetra lacus eget tincidunt. Etiam non faucibus lectus. 
                      Quisque est nunc, accumsan sed enim et, blandit ullamcorper lectus.
                      </p>
                    </div>
                  )}
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
