import React, { Component } from "react";
import axios from "axios";

import "../common/css/custom.css";
import { NavLink } from "react-router-dom";

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      dname: "",
      descrip: "",
      date: "",
      time: "10:00"
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
      .post("/patient/appointments", {
        name: this.state.name,
        dname: this.state.dname,
        descrip: this.state.descrip,
        date: this.state.date,
        time: this.state.time,
      },{
        headers: { 
          'x-access-token': this.props.jwt 
        }
      }  
      )
      .then(res => {
        console.log("Successfully Submitted");
        this.props.history.push('/patient/profile')
      })
      .catch(err => {
        console.error(err);
        alert('Failed! Please try again after some time');
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="title-box">
          <h2>Appointments</h2>
        </div>
        <div className="container-fluid profile-box">
          <div className="row">
          <div className="col-lg-3 lhalf">
              <h1><NavLink to="/patient/profile">Details</NavLink></h1>
              <h1><NavLink to="/patient/test">Test</NavLink></h1>
              <h1><NavLink to="/patient/appointments">Appointments</NavLink></h1>
              <h1><NavLink to="/patient/guidelines">Guidelines</NavLink></h1>
            </div>

            <div className="col rhalf appointment">
              <form onSubmit={e => this.submit(e)}>
                <div className="form-group apps">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control apps-control"
                    name="name"
                    onChange={e => this.change(e)}
                    value={this.state.name}
                    required
                  ></input>
                </div>

                <div className="form-group apps">
                  <label>Doctor Name</label><br/>
                    <select name="dname" value={this.state.value} onChange={e => this.change(e)} required>
                      <option value="">Select Your Doctor</option>
                      <option value="Dr. Jones">Dr. Jones</option>
                      </select>   
                  </div>

                  <div className="form-group apps">
                    <label>Specifics</label>
                    <input
                      type="textarea"
                      className="form-control apps-control"
                      name="descrip"
                      onChange={e => this.change(e)}
                      value={this.state.descrip}
                      required
                    ></input>
                  </div>

                  <div className="form-group apps">
                    <label>Date</label>
                    <input
                      type="date"
                      className="form-control apps-control"
                      name="date"
                      onChange={e => this.change(e)}
                      value={this.state.date}
                      required
                    ></input>
                  </div>

                  <div className="form-group apps">
                    <label>Time</label>
                    <input
                      type="time"
                      className="form-control apps-control"
                      name="time"
                      onChange={e => this.change(e)}
                      value={this.state.time}
                      min="10:00" max="18:00"
                      required
                    ></input>
                  </div>
                  <button type="submit" className="btn btn-primary signup">
                    Submit
                  </button>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointments;
