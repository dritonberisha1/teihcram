import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthLayout from '../../../components/admin/auth-layout';

const INITIAL = {
    EMAIL: 'email',
    PASSWORD: 'password'
};

class resetPasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL
    }

    render() {
        return (
            <AuthLayout firstBox={<FirstBox />} secondBox={<SecondBox {...this} />} />
        )
    }

    _onChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    _resetPassword = () => {
        console.log("RESET_PASSWORD");
    }
}

function FirstBox() {
    return (
        <Fragment>
            <div>
                <h1>LOGIN</h1>
                <p>Want to go back and login?</p>
                <div className="d-flex flex-column">
                    <Link to="/admin/login" className="btn btn-third text-secondary">Login</Link>
                </div>
            </div>
        </Fragment>
    );
}

function SecondBox(props) {
    const { _onChange, _resetPassword } = props; //Actions
    const { state } = props; //Variables

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
                        value={state.email} />
                </div>
                <div className="mt-2">
                    <label className="m-0">New Password</label>
                    <input
                        className="form-control"
                        name="password"
                        onChange={_onChange}
                        placeholder="Password"
                        type="password"
                        value={state.password} />
                </div>
            </div>
            <button className="btn btn-secondary mt-4" onClick={_resetPassword}>Login</button>
        </Fragment>
    );
}

export default withRouter(resetPasswordPage);