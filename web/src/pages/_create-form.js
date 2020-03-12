import React, { Component, Fragment } from 'react';
import authService from '../services/auth-service';
import teamService from '../services/team-service';

const TEAM_PHASES = {
    INIT: 'initial',
    SIGNED_UP: 'signedUp',
    EMAIL_CONFIRMED: 'email_confirmed',
    TEAM_SUBMITED: 'team_submited'
}
class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmationCode: '',
            phase: TEAM_PHASES.INIT,
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
                {phase === TEAM_PHASES.INIT && (
                    <div>
                        <input name="teamName" defaultValue={teamName} onChange={this._onChangeTeam} placeholder="Team Name" className="form-control" />
                        <input name="companyName" defaultValue={companyName} onChange={this._onChangeTeam} placeholder="Company Name" className="form-control" />
                        <input name="email" defaultValue={email} onChange={this._onChangeTeam} placeholder="Email" className="form-control" />
                        <input name="minutes" defaultValue={minutes} onChange={this._onChangeTeam} placeholder="Total Minutes" className="form-control" />
                        <button className="btn btn-primary mt-2" onClick={this._submitTeam}>Submit team</button>
                    </div>
                )}
                {phase === TEAM_PHASES.SIGNED_UP && (
                    <div>
                        <p>You should recieve a confirmation code in your email</p>
                        <input name="confirmationCode" defaultValue={confirmationCode} onChange={this._onChange} placeholder="Confirmation Code" className="form-control" />
                        <button className="btn btn-primary mt-2" onClick={this._submitTeam}>Confirm</button>
                    </div>
                )}
                {phase === TEAM_PHASES.TEAM_SUBMITED && (
                    <div>
                        <p>YOU HAVE SUBMITTED YOUR TEAM!</p>
                    </div>
                )}
            </Fragment>
        )
    }

    _submitTeam = () => {
        const { phase } = this.state; //Variables
        switch (phase) {
            case TEAM_PHASES.INIT:
                return __signup.bind(this)();
            case TEAM_PHASES.SIGNED_UP:
                return __confirmAccount.bind(this)();
            default:
                return;
        }

        function __confirmAccount() {
            const { team, confirmationCode } = this.state;
            authService.verifyAccount(team.email, confirmationCode)
                .then(results => {
                    __completePhase.bind(this)(TEAM_PHASES.EMAIL_CONFIRMED);
                    return __submitTeam.bind(this)()
                })
                .then(results => {
                    __completePhase.bind(this)(TEAM_PHASES.TEAM_SUBMITED);
                })
                .catch(error => console.log("ERROR", error));

            function __submitTeam() {
                const { team } = this.state;
                return teamService.createTeam(team);
            }
        }

        function __completePhase(completedPhase) {
            switch (completedPhase) {
                case TEAM_PHASES.SIGNED_UP:
                    return this.setState({ phase: TEAM_PHASES.SIGNED_UP });
                case TEAM_PHASES.EMAIL_CONFIRMED:
                    return this.setState({ phase: TEAM_PHASES.EMAIL_CONFIRMED });
                case TEAM_PHASES.TEAM_SUBMITED:
                    return this.setState({ phase: TEAM_PHASES.TEAM_SUBMITED });
                default:
                    return this.setState({ phase: TEAM_PHASES.INIT });
            }

        }

        function __signup() {
            const { team } = this.state;
            authService.signUp({ username: team.email, email: team.email, password: 'randomPassword123' })
                .then(results => {
                    __completePhase.bind(this)(TEAM_PHASES.SIGNED_UP);
                })
                .catch(error => console.log("ERROR", error));
        }
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
}

export default CreateForm;