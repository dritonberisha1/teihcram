import React, { Component } from 'react';
import teamService from '../../../services/team-service';
import companyService from '../../../services/company-service';

import TeamList from './_teams-list';
import CompaniesList from './_companies-list';

class DashboardPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            companiesWithTotal: [],
            selectedCompany: '',
            teams: [],
            totalMinutes: 0
        }
    }

    componentDidMount = async () => {
        const companies = companyService.fetchCompanies();
        const teams = teamService.fetchTeams();
        const resolveCompanies = await companies;
        const resolvedTeams = await teams;
        await this.setState({ companies: resolveCompanies, teams: resolvedTeams });
        const analytics = await this._fetchCompaniesTotal();
        this.setState({
            totalMinutes: analytics.totalMinutes,
            companiesWithTotal: analytics.companiesWithTotal
        })
    }

    render() {
        const { companies = [], companiesWithTotal = [], teams = [], totalMinutes = 0, selectedCompany } = this.state || {}; //Variables
        return (
            <div className="d-flex flex-column pt-lg-5 pt-3">
                <div className="d-flex flex-row flex-grow-1 bg-third justify-content-center py-5 px-4 mb-3 text-secondary">
                    <h1>TOTAL MINUTES: {totalMinutes}</h1>
                </div>
                <div className="d-flex flex-row align-items-start">
                    <div className="d-flex flex-column flex-grow-1 bg-third justify-content-between py-5 px-4 mr-2 text-secondary">
                        <div className="d-flex flex-row">
                            <div>
                                <h2>Teams Submitted</h2>
                            </div>
                            <div className="ml-3 mb-2 d-flex flex-column flex-grow-1">
                                <label className="m-0">Filter by client</label>
                                <select className="custom-select" onChange={this._onChangeCompany} defaultValue={selectedCompany}>
                                    <option value="" key="first">Select company</option>
                                    {companies.map(option => <option key={option.name} value={option.name}>{option.name}</option>)}
                                </select>
                            </div>
                        </div>

                        <TeamList data={this._fetchTeams()} />
                    </div>
                    <div className="d-flex flex-column flex-grow-1 bg-third justify-content-between py-5 px-4 ml-2 text-secondary">
                        <h2>Companies (Clients) Total minutes</h2>
                        <CompaniesList data={companiesWithTotal} />
                    </div>
                </div>
            </div>
        )
    }

    _fetchCompaniesTotal = () => {
        const { teams = [], companies = [] } = this.state;
        return new Promise((resolve, reject) => {
            let totalMinutes = 0;
            const companiesWithTotal = companies.map(company => ({ name: company.name, totalMinutes: 0 }));
            companiesWithTotal.forEach((company, index) => {
                teams.forEach((team, teamIndex) => {
                    if (team.companyName === company.name)
                        companiesWithTotal[index].totalMinutes = companiesWithTotal[index].totalMinutes + parseInt(team.minutes);
                    if (index === 0)
                        totalMinutes = parseInt(totalMinutes) + parseInt(team.minutes)
                })
            })
            return resolve({ companiesWithTotal, totalMinutes });
        })
    }

    _fetchTeams = () => {
        const { teams, selectedCompany } = this.state;
        if (selectedCompany)
            return teams.filter(team => team.companyName === selectedCompany);
        return teams;
    }

    _onChangeCompany = (event) => {
        const { value } = event.target;
        this.setState({
            ...this.state,
            selectedCompany: value
        })
    }
}

export default DashboardPage;