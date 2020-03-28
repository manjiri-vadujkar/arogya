import React, { Component } from "react";
import Axios from "axios";

import "../common/css/custom.css"

class Appointments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    Axios.get("/patient/details", {
      headers: { 'x-access-token': this.props.jwt }
    })
      .then(res =>
        this.setState({
          user: res.data.data
        })
      )
      .catch(err => {
        console.error(err);
        alert('Some error loading details. Try logging in again.');
        sessionStorage.removeItem("secretkey");
        this.props.history.push("/login");
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="title-box">
          <h2>Profile</h2>
        </div>
        <div className="container-fluid profile-box">
          <div className="row">
          <div className="col-lg-3 lhalf">
              <h1><a href="/profile">Details</a></h1>
              <h1><a href="/test">Test</a></h1>
              <h1><a href="/appointments">Appointments</a></h1>
              <h1><a href="">Guidelines</a></h1>
            </div>

            <div className="col rhalf">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointments;
