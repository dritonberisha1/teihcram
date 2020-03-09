import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import authService from '../../../services/auth-service';
import AuthLayout from '../../../components/admin/auth-layout';

const INIT = {
    email: '',
    password: ''
};


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = INIT;
    }

    componentDidMount() {
        if (!this.props.location.email) return;
        this.setState({
            ...this.state,
            email: this.props.location.email
        });
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

    _login = async () => {
        authService.login(this.state.email, this.state.password)
            .then(results => {
                this.props.history.push('/admin/create-team');
            })
            .catch(error => console.log("ERROR", error));
    }
}

function FirstBox() {
    return (
        <Fragment>
            <h1>SIGN UP</h1>
            <div>
                <p className="m-0">
                    Don't have an account?
                    Sign up here to register your team and minutes.
                </p>

                <div className="d-flex flex-column">
                    <Link to="/admin/sign-up" className="btn btn-third text-secondary">Sign up</Link>
                </div>
            </div>
            <div className="mt-4">
                <p className="m-0">Forgot your passowrd?</p>
                <div className="d-flex flex-column">
                    <Link to="/admin/reset-password" className="btn btn-third text-secondary">Reset Password</Link>
                </div>
            </div>
            <div className="mt-4">
                <p className="m-0">Verify account.</p>
                <div className="d-flex flex-column">
                    <Link to="/admin/verify-account" className="btn btn-third text-secondary">Verify account</Link>
                </div>
            </div>
        </Fragment>
    )
}

function SecondBox(props) {
    const { _onChange, _login } = props; //Actions
    const { state } = props; //Variables

    return (
        <Fragment>
            <h1>LOGIN</h1>
            <div >
                <div className="pt-2">
                    <label className="m-0">Email address</label>
                    <input
                        className="form-control"
                        name="email"
                        onChange={_onChange}
                        placeholder="Email"
                        type="text"
                        value={state.email} />
                </div>
                <div className="pt-2">
                    <label className="m-0">Password</label>
                    <input
                        className="form-control"
                        name="password"
                        onChange={_onChange}
                        placeholder="Password"
                        type="password"
                        value={state.password} />
                </div>
            </div>
            <div className="d-flex flex-column mt-3">
                <button className="btn btn-secondary" onClick={_login}>Login</button>
            </div>
        </Fragment>
    )
}


export default withRouter(LoginPage);