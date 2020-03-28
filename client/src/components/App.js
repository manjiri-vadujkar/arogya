import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { getJwt } from "../helpers/jwt";

// All styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../common/css/font-awesome.min.css";
import "../common/css/bootstrap.min.css";
import "../common/css/animate.css";
import "../common/css/style.css";
import "../common/css/responsive.css";
import "../common/css/custom.css";

import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Footer from "./Footer";
import About from "./About";
import Gallery from "./Gallery";
import Profile from "./Profile";
import Contact from "./Contact";
import Hr from "./Hr";
import Appointments from "./Appointments";
import Test from "./Test"

// this helps us protect passed components
const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const jwt = getJwt();
  return (
    <Route
      {...rest}
      render={props =>
        jwt ? <Component {...props} jwt={jwt} /> : <Redirect to="/login" />
      }
    />
  );
};

// this helps us pass, custom props to route components.
const RouteWrapper = ({
  component: Component,
  isLoggedIn,
  updateLoggedInState,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Component
          {...props}
          isLoggedIn={isLoggedIn}
          updateLoggedInState={updateLoggedInState}
        />
      )}
    ></Route>
  );
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: getJwt() ? true : false
    };

    this.updateLoggedInState = this.updateLoggedInState.bind(this);
  }

  updateLoggedInState() {
    this.setState({
      isLoggedIn: getJwt() ? true : false
    })
  }

  render() {
    return (
      <BrowserRouter>
        {/* pass isLoggedIn state to Header as prop so that we can toggle(show/hide) logout/login buttons.
          pass updateLoggedInState method to Header so that we can call it when logout button is clicked */}
        <Header isLoggedIn={this.state.isLoggedIn} updateLoggedInState={this.updateLoggedInState} />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          
          <RouteWrapper exact path="/home" component={Home}></RouteWrapper>
          {/* pass updateLoggedInState method to Login so that we can call it when successful login happens */}
          
          <RouteWrapper
            exact
            path="/login"
            component={Login}
            updateLoggedInState={this.updateLoggedInState}
          ></RouteWrapper>
          
          <RouteWrapper exact path="/signup" component={Signup}></RouteWrapper>
          
          <RouteWrapper
            exact
            path="/gallery"
            component={Gallery}
          ></RouteWrapper>
          
          <RouteWrapper exact path="/about" component={About}></RouteWrapper>
          
          <RouteWrapper exact path="/hr" component={Hr}></RouteWrapper>
          
          <AuthenticatedRoute
            exact
            path="/profile"
            component={Profile}
          ></AuthenticatedRoute>
          
          <AuthenticatedRoute
           exact
           path="/appointments"
           component={Appointments}
           ></AuthenticatedRoute>
           
           <AuthenticatedRoute
           exact
           path="/test"
           component={Test}
           ></AuthenticatedRoute>

          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
