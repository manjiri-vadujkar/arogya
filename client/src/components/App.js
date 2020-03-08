import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './home';
import Login from './login';
import Signup from './signup';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
