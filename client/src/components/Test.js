import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import "../common/css/custom.css"

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
      q9: "",
      q10: ""
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
      .post("/patient/test", 
      {
        q1: this.state.q1,
        q2: this.state.q2,
        q3: this.state.q3,
        q4: this.state.q4,
        q5: this.state.q5,
        q6: this.state.q6,
        q7: this.state.q7,
        q8: this.state.q8,
        q9: this.state.q9,
        q10: this.state.q10
      },
      {   
        headers: { 
          'x-access-token': this.props.jwt 
        }
      })
      .then(res => {
        alert("Test result successfully submitted");
        this.props.history.push('/patient/profile')
      })
      .catch(err => {
        console.error(err);
        alert('Test Submission Failed! Please try again after some time');
      });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="title-box">
          <h2>Test</h2>
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
              <div id="signup" className="blog-box">
                <div className="container">
                  <div className="col-lg-12 ">
                    <form onSubmit={e => this.submit(e)}>

                    <div className="form-group">
                        <label>How would you describe your physique?</label><br/>
                          <select name="q1" value={this.state.value} onChange={e => this.change(e)} required>
                            <option value="">Select Your Answer</option>
                            <option value="v">Slender and Lithe</option>
                            <option value="p">Robust and Muscle Bound</option>
                            <option value="k">Bulky and Stout</option>
                          </select>
                      </div>

                      <div className="form-group">
                        <label>How would you describe your hair?</label><br/>
                          <select name="q2" value={this.state.value} onChange={e => this.change(e)} required>
                            <option value="">Select Your Answer</option>
                            <option value="v">Dry and Rough</option>
                            <option value="p">Smooth and Lighter toned</option>
                            <option value="k">Silky and soft</option>
                          </select>
                      </div>

                      <div className="form-group">
                        <label>How would you descibe your skin?</label><br/>
                          <select name="q3" value={this.state.value} onChange={e => this.change(e)} required>
                            <option value="">Select Your Answer</option>
                            <option value="v">Dry and Cracked</option>
                            <option value="p">Soft, Warm and Delicate</option>
                            <option value="k">Soft, Oily and Cool</option>
                          </select>
                      </div>

                      <div className="form-group">
                        <label>How would you descibe your apetite?</label><br/>
                          <select name="q4" value={this.state.value} onChange={e => this.change(e)} required>
                            <option value="">Select Your Answer</option>
                            <option value="v">Unpredictable</option>
                            <option value="p">Intense and irregular</option>
                            <option value="k">Stable and regular</option>
                          </select>
                      </div>

                      <div className="form-group">
                        <label>How would you describe your sleeping?</label><br/>
                          <select name="q5" value={this.state.value} onChange={e => this.change(e)} required>
                            <option value="">Select Your Answer</option>
                            <option value="v">Intermittent and disturbed</option>
                            <option value="k">Regular</option>
                            <option value="p">Sound</option>
                          </select>   
                      </div>

                      <div className="form-group">
                        <label>How would you describe your behaviour?</label><br/>
                          <select name="q6" value={this.state.value} onChange={e => this.change(e)} required>
                            <option value="">Select Your Answer</option>
                            <option value="v">Hyperactive</option>
                            <option value="p">Normal</option>
                            <option value="k">Calm and Slow</option>
                          </select>
                      </div>

                      <div className="form-group">
                        <label>How would you describe your grasping power?</label><br/>
                          <select name="q7" value={this.state.value} onChange={e => this.change(e)} required>
                            <option value="">Select Your Answer</option>
                            <option value="v">Unpredictable</option>
                            <option value="p">Sharp and Volatile</option>
                            <option value="k">Solid</option>
                          </select>
                      </div>

                      <div className="form-group">
                        <label>What are your weather preferences?</label><br/>
                          <select name="q8" value={this.state.value} onChange={e => this.change(e)} required>
                            <option value="">Select Your Answer</option>
                            <option value="v">Hot and Humid</option>
                            <option value="p">Cold</option>
                            <option value="k">Hot and Dry</option>
                          </select>
                      </div>

                      <div className="form-group">
                        <label>How would you describe your thirst?</label><br/>
                          <select name="q9" value={this.state.value} onChange={e => this.change(e)} required>
                            <option value="">Select Your Answer</option>
                            <option value="v">Frequent</option>
                            <option value="p">Intense</option>
                            <option value="k">Subtle</option>
                          </select>
                      </div>

                      <div className="form-group">
                        <label>How would you describe your temper?</label><br/>
                          <select name="q10" value={this.state.value} onChange={e => this.change(e)} required>
                            <option value="">Select Your Answer</option>
                            <option value="v">Volatile</option>
                            <option value="p">Short-Tempered</option>
                            <option value="k">Calm</option>
                          </select>
                      </div>
                      <button type="submit" className="btn btn-primary signup">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
