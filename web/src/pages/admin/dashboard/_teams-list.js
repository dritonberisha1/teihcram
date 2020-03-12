import React, { Component } from 'react';

class TeamsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teams: this.props.data || []
        };
    }

    static getDerivedStateFromProps(props, state) {
        return { teams: props.data || [] };
    }

    render() {
        const { teams = [] } = this.state || {};
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Team Name</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Minutes</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr key={team.email}>
                            <th scope="row">{index + 1}</th>
                            <td>{team.teamName}</td>
                            <td>{team.companyName}</td>
                            <td>{team.minutes}</td>
                            <td>{team.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default TeamsList;