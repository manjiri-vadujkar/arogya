import React, { Component } from "react";
import Axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    Axios.get("/patient/details", {
      headers: { 'x-access-token': this.props.jwt }
    })
      .then(res =>
        res.setState({
          user: res.data.data
        })
      )
      .catch(err => {
        console.error(err);
        alert('Some error loading details. Try logging in again.');
        sessionStorage.removeItem("secretkey");
        this.props.history.push("/login");
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Profile</h1>
        <p>Hello logged in user</p>
      </div>
    );
  }
}

export default Profile;
