import React, { Component } from "react";

import axios from "axios";
import "../common/css/login.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      email: "",
      password: "",
      age: "",
      gender: "",
      height: "",
      weight: "",
      hdiseases: ""
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
      .post("/auth/signup", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        age: this.state.age,
        gender: this.state.gender,
        height: this.state.height,
        weight: this.state.weight,
        hdiseases: this.state.hdiseases
      })
      .then(res => {
        console.log("Successfully signed up");
        this.props.history.push('/login')
      });
  }
  render() {
    return (
      <div id="signup" className="blog-box">
        <div className="container">
          <div className="col-lg-12 signup-box">
            <div className="title-box">
              <h1 className="sign">Sign Up</h1>
            </div>
            <form onSubmit={e => this.submit(e)}>

            <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={e => this.change(e)}
                  value={this.state.name}
                ></input>
              </div>

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

              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  onChange={e => this.change(e)}
                  value={this.state.age}
                ></input>
              </div>

              <div className="form-group">
                <label>Gender</label>
                <input
                  type="text"
                  className="form-control"
                  name="gender"
                  onChange={e => this.change(e)}
                  value={this.state.gender}
                ></input>
              </div>

              <div className="form-group">
                <label>Height</label>
                <input
                  type="text"
                  className="form-control"
                  name="height"
                  onChange={e => this.change(e)}
                  value={this.state.height}
                ></input>
              </div>

              <div className="form-group">
                <label>Weight</label>
                <input
                  type="text"
                  className="form-control"
                  name="weight"
                  onChange={e => this.change(e)}
                  value={this.state.weight}
                ></input>
              </div>

              <div className="form-group">
                <label>Hereditary Diseases</label>
                <input
                  type="text"
                  className="form-control"
                  name="hdiseases"
                  onChange={e => this.change(e)}
                  value={this.state.hdiseases}
                ></input>
              </div>

              <button type="submit" className="btn btn-primary signup">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;

