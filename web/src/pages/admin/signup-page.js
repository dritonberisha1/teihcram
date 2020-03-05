import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/admin/auth-layout';

const INPUTS = {
    EMAIL: 'email',
    PASSWORD: 'password'
};

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <AuthLayout firstBox={<FirstBox />} secondBox={<SecondBox />} />
    );

    function FirstBox() {
        return (
            <Fragment>
                <div>
                    <h1>LOGIN</h1>
                    <p>
                        Already have an account?
                    </p>
                    <p>
                        Login here.
                    </p>
                </div>
                <div className="d-flex flex-column">
                    <Link to="/admin/login" className="btn btn-third mt-4">Login</Link>
                </div>
            </Fragment>
        );
    }

    function SecondBox() {
        return (
            <Fragment>
                <h1>SIGN UP</h1>
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
                        <label className="m-0">Password</label>
                        <input
                            className="form-control"
                            name="password"
                            onChange={_onChange}
                            placeholder="Password"
                            type="password"
                            value={password} />
                    </div>
                    <button className="btn btn-secondary mt-4" onClick={_signup}>Sign up</button>
                </div>
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

    function _signup() {
        console.log("NAME", email);
    }
}


export default SignUpPage;