import React, { Component, Fragment } from "react";
import Gallery1 from "../common/images/gallery1.jpg";
import Gallery2 from "../common/images/gallery2.jpg";
import Gallery3 from "../common/images/gallery3.jpg";
import Gallery4 from "../common/images/gallery4.jpg";
import Gallery5 from "../common/images/gallery5.jpg";
import Gallery6 from "../common/images/gallery6.jpg";
import Gallery7 from "../common/images/gallery7.jpg";
import Gallery8 from "../common/images/gallery8.jpg";

class Gallery extends Component {
  imageData = [
    {
      image: Gallery1
    },
    {
      image: Gallery2
    },
    {
      image: Gallery3
    },
    {
      image: Gallery4
    },
    {
      image: Gallery5
    },
    {
      image: Gallery6
    },
    {
      image: Gallery7
    },
    {
      image: Gallery8
    }
  ];

  buildImages() {
    return this.imageData.map((data, index) => {
      return (
        <Fragment key={index}>
          <div className="col-md-3 col-sm-6">
            <div className="box-gallery">
              <img
                src={data.image}
                alt={data.title}
                style={{ height: "220px" }}
              ></img>
              <div className="box-content">
              </div>
            </div>
          </div>
        </Fragment>
      );
    });
  }

  render() {
    return (
      <div id="gallery" className="gallery-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-box">
                <h2>Gallery</h2>
              </div>
            </div>
          </div>

          <div className="popup-gallery row clearfix">{this.buildImages()}</div>
        </div>
      </div>
    );
  }
}

export default Gallery;
