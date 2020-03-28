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
      })
      .catch(err => {
        console.error(err);
        alert('Signup failed! Please try again after some time');
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
                  required
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
                  required
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
                  required
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
                  required
                ></input>
              </div>

              <div className="form-group">
                <label>Gender</label><br/>
                  <select name="gender" value={this.state.value} onChange={e => this.change(e)} required>
                    <option value="">Select Your Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>   
              </div>

              <div className="form-group">
                <label>Height (in cms)</label>
                <input
                  type="text"
                  className="form-control"
                  name="height"
                  onChange={e => this.change(e)}
                  value={this.state.height}
                  required
                ></input>
              </div>

              <div className="form-group">
                <label>Weight (in kgs)</label>
                <input
                  type="text"
                  className="form-control"
                  name="weight"
                  onChange={e => this.change(e)}
                  value={this.state.weight}
                  required
                ></input>
              </div>

              <div className="form-group">
                <label>Hereditary Diseases</label><br/>
                  <select name="hdiseases" value={this.state.value} onChange={e => this.change(e)} required>
                    <option value="">Select the disease</option>
                    <option value="Blood Pressure">Blood Pressure</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Obesity">Obesity</option>
                  </select>
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

