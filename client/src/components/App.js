import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { getJwt } from "../helpers/jwt";
import { getDoctorState } from "../helpers/doctor";

// All styles
import "bootstrap/dist/css/bootstrap.min.css";
import "../common/css/font-awesome.min.css";
import "../common/css/bootstrap.min.css";
import "../common/css/animate.css";
import "../common/css/style.css";
import "../common/css/responsive.css";
import "../common/css/custom.css";

//All Components
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
import Test from "./Test";
import Guidelines from "./Guidelines";
import Dhome from "./Dhome";
import Dlogin from "./Dlogin";
import Dappointments from "./Dappointments";

// this helps us protect passed components
const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const jwt = getJwt();
  const isDoctor = getDoctorState();
  return (
    <Route
      {...rest}
      render={props => {
        if (jwt) {
          console.log(rest)
          switch(rest.userType) {
            case "patient": 
              if (!isDoctor) {
                return <Component {...props} jwt={jwt} />
              }
              return <Redirect to="/home" />
            case "doctor": 
              if (isDoctor) {
                return <Component {...props} jwt={jwt} />
              }
              return <Redirect to="/home" />
            default: return <Redirect to="/home" />
          }
        } 
        return <Redirect to="/patient/login" />
      
      }
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
      isLoggedIn: getJwt() ? true : false,
      isDoctor: getDoctorState() ? true : false
    };

    this.updateLoggedInState = this.updateLoggedInState.bind(this);
  }

  updateLoggedInState() {
    this.setState({
      isLoggedIn: getJwt() ? true : false,
      isDoctor: getDoctorState() ? true : false
    })
  }


  render() {
    return (
      <BrowserRouter>
        {/* pass isLoggedIn state to Header as prop so that we can toggle(show/hide) logout/login buttons.
          pass updateLoggedInState method to Header so that we can call it when logout button is clicked */}
        <Header isLoggedIn={this.state.isLoggedIn} updateLoggedInState={this.updateLoggedInState} 
          isDoctor={this.state.isDoctor} />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          
          <RouteWrapper exact path="/home" component={Home}></RouteWrapper>
          {/* pass updateLoggedInState method to Login so that we can call it when successful login happens */}
          
          <RouteWrapper
            exact
            path="/patient/login"
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
            path="/patient/profile"
            userType="patient"
            component={Profile}
          ></AuthenticatedRoute>
          
          <AuthenticatedRoute
           exact
           path="/patient/appointments"
           userType="patient"
           component={Appointments}
           ></AuthenticatedRoute>
           
           <AuthenticatedRoute
           exact
           path="/patient/test"
           userType="patient"
           component={Test}
           ></AuthenticatedRoute>

          <AuthenticatedRoute
           exact
           path="/patient/guidelines"
           userType="patient"
           component={Guidelines}
           ></AuthenticatedRoute>

          <Route exact path="/contact" component={Contact}></Route>

          <RouteWrapper
            exact
            path="/doctor/login"
            component={Dlogin}
            updateLoggedInState={this.updateLoggedInState}
          ></RouteWrapper>

          <AuthenticatedRoute
          exact
          path="/doctor/all-patients"
          userType="doctor"
          component={Dhome}
          ></AuthenticatedRoute>

          <AuthenticatedRoute
          exact
          path="/doctor/all-appointments"
          userType="doctor"
          component={Dappointments}
          ></AuthenticatedRoute>

        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
