import React, { Component } from "react";
import Axios from "axios";

import "../common/css/custom.css"

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    };
  }

  componentDidMount() {
    Axios.get("/patient/guidelines", {
      headers: { 'x-access-token': this.props.jwt }
    })
      .then(res =>
        this.setState({
          user: res.data.data
        })
      )
      .catch(err => {
        console.error(err);
        alert("Your result wasn't found. Take the test again");
        sessionStorage.removeItem("secretkey");
        this.props.history.push("/test");
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="title-box">
          <h2>Guidelines</h2>
          <p>
              What to follow according to your Prakriti
          </p>
        </div>
        <div className="container-fluid profile-box">
          <div className="row">
            <div className="col-lg-3 lhalf">
              <h1><a href="/profile">Details</a></h1>
              <h1><a href="/test">Test</a></h1>
              <h1><a href="/appointments">Appointments</a></h1>
              <h1><a href="/guidelines">Guidelines</a></h1>
            </div>

            <div className="col rhalf">
            <table className="detailsTable">
                <tbody>
                  <tr>
                  <td>Result</td><td>{this.state.user.result}</td>
                  </tr>
                  <tr>
                  <td>Diet</td><td>{this.state.user.diet}</td>
                  </tr>
                  <tr>
                  <td>Exercise</td><td>{this.state.user.exercise}</td>
                  </tr>
                  <tr>
                  <td>Daily Activities</td><td>{this.state.user.dailyact}</td>
                  </tr>
                  <tr>
                  <td>Avoid</td><td>{this.state.user.avoid}</td>
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
