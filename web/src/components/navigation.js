import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Logo from './logo';

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation navbar-expand-lg navbar-light bg-white shadow-sm justify-content-between">
                <Logo />
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="navbar" id="navbarSupportedContent" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active fa-pull-right">
                            <Link className="nav-link text-secondary mr-4">
                                Jakobsbergs vårdcentral
                            </Link >
                        </li>
                        <li className="nav-item active fa-pull-right">
                            <Link className="nav-link text-secondary">Logout <i className="fas fa-arrow-alt-circle-right ml-1"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav >
        );
    }
}
export default Navigation;