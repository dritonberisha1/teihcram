import React, { Component, Fragment } from 'react';
import authService from '../services/auth-service';
import teamService from '../services/team-service';

const PHASES = {
    SIGNUP: 'signup',
    CONFIRM_EMAIL: 'confirmEmail',
    SUBMIT_TEAM: 'submitTeam',
    COMPLETE: 'complete'
}
class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmationCode: '',
            phase: PHASES.SIGNUP,
            team: {
                teamName: '',
                companyName: '',
                email: '',
                minutes: ''
            }
        }
    }

    render() {
        const { confirmationCode, phase, team } = this.state //Variables
        const { teamName, companyName, email, minutes } = team;
        return (
            <Fragment>
                {phase === PHASES.SIGNUP && (
                    <div>
                        <input name="teamName" defaultValue={teamName} onChange={this._onChangeTeam} placeholder="Team Name" className="form-control" />
                        <input name="companyName" defaultValue={companyName} onChange={this._onChangeTeam} placeholder="Company Name" className="form-control" />
                        <input name="email" defaultValue={email} onChange={this._onChangeTeam} placeholder="Email" className="form-control" />
                        <input name="minutes" defaultValue={minutes} onChange={this._onChangeTeam} placeholder="Total Minutes" className="form-control" />
                        <button className="btn btn-primary mt-2" onClick={this._signup}>Submit team</button>
                    </div>
                )}
                {phase === PHASES.CONFIRM_EMAIL && (
                    <div>
                        <p>You should recieve a confirmation code in your email</p>
                        <input name="confirmationCode" defaultValue={confirmationCode} onChange={this._onChange} placeholder="Confirmation Code" className="form-control" />
                        <button className="btn btn-primary mt-2" onClick={this._confirmAccount}>Confirm</button>
                    </div>
                )}
                {phase === PHASES.COMPLETE && (
                    <div>
                        <p>YOU HAVE SUBMITTED YOUR TEAM!</p>
                    </div>
                )}
            </Fragment>
        )
    }

    _completePhase(completedPhase) {
        switch (completedPhase) {
            case PHASES.SIGNUP:
                return this.setState({ phase: PHASES.CONFIRM_EMAIL });
            case PHASES.CONFIRM_EMAIL:
                return this.setState({ phase: PHASES.SUBMIT_TEAM });
            case PHASES.SUBMIT_TEAM:
                return this.setState({ phase: PHASES.COMPLETE });
            default:
                return this.setState({ phase: PHASES.SIGNUP });
        }

    }

    _confirmAccount = () => {
        const { team, confirmationCode } = this.state
        authService.verifyAccount(team.email, confirmationCode)
            .then(results => {
                this._completePhase(PHASES.CONFIRM_EMAIL);
                return this._submitTeam()
            })
            .then(results => {
                this._completePhase(PHASES.SUBMIT_TEAM);
            })
            .catch(error => console.log("ERROR", error));
    }

    _onChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    _onChangeTeam = (event) => {
        const { name, value } = event.target;

        this.setState({
            team: {
                ...this.state.team,
                [name]: value
            }
        })
    }

    _signup = () => {
        const { team } = this.state;
        authService.signUp({ username: team.email, email: team.email, password: 'randomPassword123' })
            .then(results => {
                this._completePhase(PHASES.SIGNUP);
            })
            .catch(error => console.log("ERROR", error));
    }

    _submitTeam = () => {
        const { team } = this.state;
        return teamService.createTeam(team);
    }
}

export default CreateForm;