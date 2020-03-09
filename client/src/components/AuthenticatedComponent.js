import React, { Component } from "react";
import getJwt from "../helpers/jwt.js"
import Axios from "axios";

class AuthenticatedComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    }
  }

  componentDidMount() {
    const jwt = getJwt();
    if(!jwt) {
      this.props.history.push('/login');
    }

    Axios.get('/patient/details', {headers: { Authorization: `Bearer ${jwt}`} } 
            ).then(res => res.setState({
                    user: res.data.data})
                  ).catch (err => {
                    console.log(err);
                    sessionStorage.removeItem('secretkey');
                    this.props.history.push('/login')});
  }

  render() {
    return (
      <div class="container">
        <h1>Profile</h1>
        <p>Hello logged in user</p>
      </div>
    );
  }
}

export default AuthenticatedComponent;
