import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthenticatedComponent from "./AuthenticatedComponent";
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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/gallery" component={Gallery}></Route>
          <Route exact path="/about" component={About}></Route>
          {/* /* <AuthenticatedComponent>
            <Route exact path="/profile" component={Profile}></Route>
          </AuthenticatedComponent> */ }
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
