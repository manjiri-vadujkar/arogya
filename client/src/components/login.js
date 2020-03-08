import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
import "../common/css/login.css";

class Login extends Component {
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
      .post("/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        sessionStorage.setItem("secretkey", res.data.data);
      });
  }
  render() {
    return (
      <div id="login" className="blog-box">
        <div className="container">
          <div className="col-lg-12 main">
            <div className="title-box">
              <h1 className="sign">Sign in</h1>
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
              <p className="forgot" align="center">
                <NavLink to="/signup">Not registered? Sign up now</NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
