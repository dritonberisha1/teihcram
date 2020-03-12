import React, { Component } from 'react';

class CompaniesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            companies: this.props.data || []
        };
    }

    static getDerivedStateFromProps(props, state) {
        return { companies: props.data || [] };
    }

    render() {
        const { companies = [] } = this.state || {};
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Total Minutes</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company, index) => (
                        <tr key={company.name}>
                            <th scope="row">{index + 1}</th>
                            <td>{company.name}</td>
                            <td>{company.totalMinutes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default CompaniesList;