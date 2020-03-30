import React, { Component, Fragment } from 'react';
import teamService from '../../services/team-service';
import companyService from '../../services/company-service';
import employeeService from '../../services/employee-service';

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            validation: {},
            team: {
                name: '',
                teamName: '',
                companyName: '',
                email: '',
                minutes: ''
            },
            teamSubmitted: false
        }
    }

    async componentDidMount() {
        const companies = await companyService.fetchCompanies();
        this.setState({ companies });
    }

    render() {
        const { companies = [], errorMessages = [], team, teamSubmitted } = this.state //Variables
        const { name, teamName, companyName, email, minutes } = team;
        return (
            <Fragment>
                {!teamSubmitted && (
                    <Fragment>
                        {errorMessages.map(message => (
                            <div class="alert alert-danger" role="alert">
                                {message}
                            </div>
                        ))}
                        <input name="name" defaultValue={name} onChange={this._onChangeTeam} placeholder="Name" className="form-control" />
                        <input name="teamName" defaultValue={teamName} onChange={this._onChangeTeam} placeholder="Team Name" className="form-control" />
                        <div class="select">
                            <label>
                                <select name="companyName" className={companyName ? 'selected' : ''} defaultValue={companyName} onChange={this._onChangeTeam}>
                                    <option value="">Select a Company</option>
                                    {companies.map(company => (
                                        <option key={company.name} value={company.name}>{company.name}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <input name="email" defaultValue={email} onChange={this._onChangeTeam} placeholder="Email" className="form-control" />
                        <input type="number" name="minutes" defaultValue={minutes} onChange={this._onChangeTeam} placeholder="Total Minutes" className="form-control" />
                        <button className="btn btn-primary" onClick={this._submitTeam}>Apply</button>
                    </Fragment>
                )}
                {teamSubmitted && (
                    <div>
                        <p>Team has been submitted</p>
                        <button className="btn btn-primary" onClick={this._submitAnotherTeam}>Submit more</button>
                    </div>
                )}
            </Fragment>
        )
    }

    _submitAnotherTeam = () => {
        this.setState({ teamSubmitted: false });
    }

    _submitTeam = async () => {
        const { team } = this.state;
        const TeamNameLength = 30;

        const validation = await __validateTeam(team);
        console.log("VALIDATION", validation);
        if (validation)
            return this.setState({ errorMessages: validation });

        teamService.createTeam(team)
            .then(result => {
                this.setState({ teamSubmitted: true });
            })
            .catch(error => {
                this.setState({ errorMessages: [error.message] })
                console.log("Error submitting team", error);
            })


        async function __validateTeam(team) {
            const errorMessages = [];
            const employees = await employeeService.fetchEmployees();
            const validEmail = employees.find(employee => employee.email === team.email);

            //Team Name
            if (!team.teamName)
                errorMessages.push("Team name is required!");
            if (!team.teamName || team.teamName.length > TeamNameLength)
                errorMessages.push("Team name should be shorter than 30 characters");

            //Email
            if (!validEmail)
                errorMessages.push("The Email provided is not a valid alten email");
            if (!team.email)
                errorMessages.push("Email is required!");

            //Company Name
            if (!team.companyName)
                errorMessages.push("Company name is required!");

            //Minutes
            if (team.minutes < 0)
                errorMessages.push("Minutes should be a real number");
            if (team.minutes < 0)
                errorMessages.push("Minutes should be a real number");
            if (!team.minutes)
                errorMessages.push("Minutes is required!");

            if (errorMessages.length > 0)
                return errorMessages;
            return false;
        }
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