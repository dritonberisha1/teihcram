import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import authService from '../../../services/auth-service';
import AuthLayout from '../../../components/admin/auth-layout';

const INITIAL = {
    email: '',
    password: ''
}

class SignUpPage extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL;
    }

    render() {
        return (
            <AuthLayout firstBox={< FirstBox />} secondBox={< SecondBox {...this} />} />
        );
    }

    _onChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    _signup = () => {
        authService.signUp({ username: this.state.email, email: this.state.email, password: this.state.password })
            .then(results => {
                this.props.history.push({ pathname: '/admin/verify-account', email: this.state.email });
            })
            .catch(error => console.log("ERROR", error));
    }
}


function FirstBox() {
    return (
        <Fragment>
            <h1>LOGIN</h1>
            <div>
                <p className="m-0">
                    Already have an account?
                </p>
                <p className="m-0">
                    Login here.
                </p>
                <div className="d-flex flex-column">
                    <Link to="/admin/login" className="btn btn-third mt-2 text-secondary">Login</Link>
                </div>
            </div>
            <div>
                <p className="m-0">
                    Verify account here.
                </p>
                <div className="d-flex flex-column">
                    <Link to="/admin/verify-account" className="btn btn-third mt-2 text-secondary">Verify account</Link>
                </div>
            </div>
        </Fragment>
    );
}

function SecondBox(props) {
    const { _onChange, _signup } = props; //Actions
    const { state } = props; //Variables

    return (
        <Fragment>
            <h1>SIGN UP</h1>
            <div className="d-flex flex-column mt-2">
                <form>
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
                        <label className="m-0">Password</label>
                        <input
                            autoComplete="false"
                            className="form-control"
                            name="password"
                            onChange={_onChange}
                            placeholder="Password"
                            type="password"
                            value={state.password} />
                    </div>
                </form>
                <button className="btn btn-secondary mt-4" onClick={_signup}>Sign up</button>
            </div>
        </Fragment>
    );
}

export default withRouter(SignUpPage);