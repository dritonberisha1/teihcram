import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Logo from './logo';
import bullhorn from '../images/megaphone.svg';
class Emergency extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center emergency bg-danger fixed-top" >
                <img className="text-white" src={bullhorn} alt="bullhorn"></img> <Link to="/" className="ml-2 text-white">Click here to follow Covid-19 updates related to TEIHCRAM</Link>
            </div>
        );
    }
}
export default Emergency;