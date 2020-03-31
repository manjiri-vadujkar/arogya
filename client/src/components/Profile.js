import React, { Component } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

import "../common/css/custom.css"

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
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
        this.props.history.push("/patient/login");
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
              <h1><NavLink to="/patient/profile">Details</NavLink></h1>
              <h1><NavLink to="/patient/test">Test</NavLink></h1>
              <h1><NavLink to="/patient/appointments">Appointments</NavLink></h1>
              <h1><NavLink to="/patient/guidelines">Guidelines</NavLink></h1>
            </div>

            <div className="col rhalf">
            <table className="detailsTable">
                <tbody>
                  <tr>
                  <td>Name</td><td>{this.state.user.name}</td>
                  </tr>
                  <tr>
                  <td>Email</td><td>{this.state.user.email}</td>
                  </tr>
                  <tr>
                  <td>Age</td><td>{this.state.user.age}</td>
                  </tr>
                  <tr>
                  <td>Gender</td><td>{this.state.user.gender}</td>
                  </tr>
                  <tr>
                  <td>Height</td><td>{this.state.user.height}</td>
                  </tr>
                  <tr>
                  <td>Weight</td><td>{this.state.user.weight}</td>
                  </tr>
                  <tr>
                  <td>Hereditary Diseases</td><td>{this.state.user.hdiseases}</td>
                  </tr>
                  <tr>
                  <td>Result</td><td>{this.state.user.result}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
