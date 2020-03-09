import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import authService from '../../../services/auth-service';
import AuthLayout from '../../../components/admin/auth-layout';

const INITIAL = {
    email: '',
    verificationCode: ''
}

class VerifyAccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = INITIAL;
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

    _verify = () => {
        authService.verifyAccount(this.state.email, this.state.verificationCode)
            .then(results => {
                this.props.history.push({ pathname: '/admin/login', email: this.state.email });
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
                    Stil don't have an account?
                    </p>
                <p className="m-0">
                    Sign up here.
                    </p>
                <div className="d-flex flex-column">
                    <Link to="/admin/sign-up" className="btn btn-third mt-2 text-secondary">Sign up</Link>
                </div>
            </div>
        </Fragment>
    );
}

function SecondBox(props) {
    const { _onChange, _verify } = props; //Actions
    const { state } = props; //Variables

    return (
        <Fragment>
            <h1>VERIFY ACCOUNT</h1>
            <p className="m-0 text-danger">
                *You should recieve your verification code in your email after signing up.
                </p>
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
                        <label className="m-0">Verification Code</label>
                        <input
                            className="form-control"
                            name="verificationCode"
                            onChange={_onChange}
                            placeholder="Verification Code"
                            type="text"
                            value={state.verificationCode} />
                    </div>
                </form>
                <button className="btn btn-secondary mt-4" onClick={_verify}>Verify</button>
            </div>
        </Fragment>
    );
}

export default withRouter(VerifyAccountPage);