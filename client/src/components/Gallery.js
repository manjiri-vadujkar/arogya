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
      title: "Lorem ipsum dolor",
      image: Gallery1
    },
    {
      title: "Lorem ipsum dolor",
      image: Gallery2
    },
    {
      title: "Lorem ipsum dolor",
      image: Gallery3
    },
    {
      title: "Lorem ipsum dolor",
      image: Gallery4
    },
    {
      title: "Lorem ipsum dolor",
      image: Gallery5
    },
    {
      title: "Lorem ipsum dolor",
      image: Gallery6
    },
    {
      title: "Lorem ipsum dolor",
      image: Gallery7
    },
    {
      title: "Lorem ipsum dolor",
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
                <h3 className="title">{data.title}</h3>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
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
