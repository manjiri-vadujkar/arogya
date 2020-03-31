import React, { Component } from "react";

import axios from "axios";
import { setJwt } from "../helpers/jwt";
import { setDoctorState } from "../helpers/doctor";
import "../common/css/login.css";

class Dlogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    axios
      .post("/auth/dlogin", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        setJwt(res.data.data);
        setDoctorState(res.data.doctor);
        this.props.updateLoggedInState();
        this.props.history.push('/doctor/all-patients');
      })
      .catch(err => {
        console.error(err);
        alert('Login failed! Please try again after some time');
      });
  }
  render() {
    return (
      <div id="login" className="blog-box">
        <div className="container">
          <div className="col-lg-12 main">
            <div className="title-box">
              <h1 className="sign">Doctor Sign in</h1>
            </div>
            <form onSubmit={e => this.submit(e)}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  onChange={e => this.change(e)}
                  value={this.state.email}
                ></input>
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={e => this.change(e)}
                  value={this.state.password}
                ></input>
              </div>

              <button type="submit" className="btn btn-primary submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Dlogin;
