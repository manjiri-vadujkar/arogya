import React, { Component } from "react";
import Axios from "axios";

import {deleteDoctorState} from "../helpers/doctor"

import "../common/css/custom.css"
import "../common/css/doctor.css"
import { deleteJwt } from "../helpers/jwt";

class Dhome extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          patients: []
        };
      }
    
    componentDidMount() {
        Axios.get("/doctor/patients", {
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
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Hereditary Dieseas</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.patients.map((p, i) => {
                                return (<tr key={i}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.age}</td>
                                    <td>{p.gender}</td>
                                    <td>{p.hdiseases}</td>
                                    <td>{p.result ? p.result : "N/A"}</td>
                                </tr>)
                            })}
                    </tbody>
                </table>
            </div>
        );
      }
    }

export default Dhome;