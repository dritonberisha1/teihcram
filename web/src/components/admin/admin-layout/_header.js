import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import authService from '../../../services/auth-service';

const altenLogo = '';
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm justify-content-between fixed-top" >
                <div className="logo">
                    <img src={altenLogo} alt="Alten"></img>
                </div>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="navbar" id="navbarSupportedContent" >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active fa-pull-right">
                            <Link className="nav-link text-secondary" onClick={this._signOut}>
                                Logout
                            </Link >
                        </li>
                        <li className="nav-item active fa-pull-right">
                            <Link className="nav-link text-secondary" to="/">Back to site <i className="fas fa-arrow-alt-circle-right"></i></Link>
                        </li>
                    </ul>
                </div>
            </nav >
        );
    }

    _signOut() {
        authService.signOut()
            .then(result => {
                console.log("RESULT", result);
                if (result) window.location.reload();
            })
            .catch(error => console.log("ERROR", error));
    }
}
export default Header;