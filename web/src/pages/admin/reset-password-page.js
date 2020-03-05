import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/admin/auth-layout';

const INPUTS = {
    EMAIL: 'email',
    PASSWORD: 'password'
};

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <AuthLayout firstBox={<FirstBox />} secondBox={<SecondBox />} />
    )

    function FirstBox() {
        return (
            <Fragment>
                <div>
                    <h1>SIGN UP</h1>
                    <p>
                        Don't have an account?
                        Sign up here to register your team and minutes.
                </p>
                    <div className="d-flex flex-column">
                        <Link to="/admin/sign-up" className="btn btn-third">Sign up</Link>
                    </div>
                </div>
                <div className="mt-4">
                    <p>Want to go back and login?</p>
                    <div className="d-flex flex-column">
                        <Link to="/admin/login" className="btn btn-third">Login</Link>
                    </div>
                </div>
            </Fragment>
        );
    }

    function SecondBox() {
        return (
            <Fragment>
                <h1>RESET PASSWORD</h1>
                <div className="d-flex flex-column mt-2">
                    <div className="mt-2">
                        <label className="m-0">Email address</label>
                        <input
                            className="form-control"
                            name="email"
                            onChange={_onChange}
                            placeholder="Email"
                            type="text"
                            value={email} />
                    </div>
                    <div className="mt-2">
                        <label className="m-0">New Password</label>
                        <input
                            className="form-control"
                            name="password"
                            onChange={_onChange}
                            placeholder="Password"
                            type="password"
                            value={password} />
                    </div>
                </div>
                <button className="btn btn-secondary mt-4" onClick={_resetPassword}>Login</button>
            </Fragment>
        );
    }

    function _onChange(event) {
        const { name, value } = event.target;

        switch (name) {
            case INPUTS.EMAIL:
                return setEmail(value);
            case INPUTS.PASSWORD:
                return setPassword(value);
            default:
                return;
        }
    }

    function _resetPassword() {
        console.log("RESET_PASSWORD", email);
    }
}


export default LoginPage;