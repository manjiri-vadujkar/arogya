import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../common/css/login.css'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        };

        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit(e) {
        e.preventDefault();
        axios.post('/auth/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then ((res) => {
            sessionStorage.setItem('secretkey', res.data.data)
        });
    }
    render() {
        return (
            <div id="login" class="blog-box">
                <div class="container">
                    <div class="col-lg-12 main">
                        <div class="title-box">
                            <h1 class="sign">Sign in</h1>
                        </div>
                        <form onSubmit={e => this.submit(e)}>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="text" class="form-control" name="email" onChange={e => this.change(e)} value={this.state.email}></input>
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" name="password" onChange={e => this.change(e)} value={this.state.password}></input>
                            </div>

                            <button type="submit" class="btn btn-primary submit">Sign in</button>
                            <p class="forgot" align="center"><a href="#">Not registered. Sign up now</a></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login;