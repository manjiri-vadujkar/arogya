import React, { Component } from "react";
import Axios from "axios";

import {deleteDoctorState} from "../helpers/doctor"

import "../common/css/custom.css"
import "../common/css/doctor.css"
import { deleteJwt } from "../helpers/jwt";

class Dappointments extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          patients: []
        };
      }
    
    componentDidMount() {
        Axios.get("/doctor/appointments", {
          headers: { 'x-access-token': this.props.jwt }
        })
        .then(res =>
            this.setState({
              patients: res.data.data
            })
        )
        .catch(err => {
            console.error(err);
            alert('Some error loading details. Try logging in again.');
            deleteJwt();
            deleteDoctorState();
            this.props.history.push("/doctor/login");
        });
    }

    render() {
        return (
            <div className="container">
                <div className="title-box">
                <h2>Patients List</h2>
                </div>
                <table className="patientsTable">
                    <thead>
                        <tr>
                            <th>Sr.no.</th>
                            <th>Name</th>
                            <th>Doctor Name</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.patients.map((p, i) => {
                                return (<tr key={i}>
                                    <td>{p.srno}</td>
                                    <td>{p.name}</td>
                                    <td>{p.dname}</td>
                                    <td>{p.descrip}</td>
                                    <td>{p.date}</td>
                                    <td>{p.time}</td>
                                </tr>)
                            })}
                    </tbody>
                </table>
            </div>
        );
      }
    }

export default Dappointments;