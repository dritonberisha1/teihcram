import React from 'react';
import { Link } from 'react-router-dom';
import altenLogo from '../../../images/alten-logo.svg';
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm justify-content-between fixed-top">
            <div className="logo">
                <img src={altenLogo} alt="Alten"></img>
            </div>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="navbar" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active fa-pull-right">
                        <Link className="nav-link" to="/">Back to site <i className="fas fa-arrow-alt-circle-right"></i></Link>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Header;