import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import '../styles/app.scss';

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div>Login</div>
                </div>
                <div className="mb-4 d-flex justify-content-center align-items-center">
                    <i class="fas fa-exclamation-triangle fa-3x text-danger"></i><h1 className="m-0">COVID-19</h1>
                </div>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
        );
    }
}
export default LandingPage;