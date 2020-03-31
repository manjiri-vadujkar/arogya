import React, { Component } from "react";
import Axios from "axios";

import "../common/css/custom.css"

class Dhome extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          user: []
        };
      }
    
    componentDidMount() {
        Axios.get("/doctor/patients", {
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
            this.props.history.push("/doctor/login");
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="title-box">
                <h2>Patients List</h2>
                </div>
                <table class="patientsTable">
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
                        <tr>
                            <td>cell1_1</td><td>cell2_1</td><td>cell3_1</td><td>cell4_1</td><td>cell5_1</td><td>cell6_1</td>
                        </tr>
                        <tr>
                            <td>cell1_2</td><td>cell2_2</td><td>cell3_2</td><td>cell4_2</td><td>cell5_2</td><td>cell6_2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
      }
    }

export default Dhome;