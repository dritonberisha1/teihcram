import React, { useState } from 'react';
import Select from '../../components/admin/select';

const INPUTS = {
    TEAM_NAME: 'teamName',
    MINUTES: 'minutes'
};

const clients = [
    "Scania",
    "Tele2",
    "Volvo"
]

function CreateTeamPage() {
    const [teamName, setTeamName] = useState('');
    const [minutes, setMinutes] = useState(0);
    const [client, setClient] = useState('');

    return (
        <div className="d-flex justify-content-center flex-row flex-wrap-reverse pt-lg-5 pt-3">
            <div className="d-flex flex-column col-lg-8 bg-third justify-content-between py-5 px-4 text-secondary">
                <h1>CREATE TEAM</h1>
                <div className="pt-2">
                    <label className="m-0">Team Name</label>
                    <input
                        className="form-control"
                        name="teamName"
                        onChange={_onChange}
                        placeholder="Team Name"
                        type="text"
                        value={teamName} />
                </div>
                <div className="pt-2">
                    <label className="m-0">Minutes </label>
                    <div className="input-group mb-3">
                        <input
                            className="form-control"
                            min="0"
                            name="minutes"
                            onChange={_onChange}
                            placeholder="Minutes"
                            step="1"
                            type="number"
                            value={minutes} />
                        <div className="input-group-append">
                            <span className="input-group-text">min</span>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="m-0">Clients </label>
                    <Select name="tr" options={clients} value={client} onChange={selectClient} />
                </div>
                <div className="d-flex flex-column col-lg-6 mt-3 mx-auto">
                    <button className="btn btn-secondary" onClick={_submit}>Submit</button>
                </div>
            </div>
        </div>
    );

    function selectClient(event) {
        setClient(event.target.value);
    }

    function _onChange(event) {
        const { name, value } = event.target;

        switch (name) {
            case INPUTS.TEAM_NAME:
                return setTeamName(value);
            case INPUTS.MINUTES:
                return setMinutes(value);
            default:
                return;
        }
    }

    function _submit() {
        const team = {
            teamName,
            minutes
        }
        console.log("TEAM CREATED", team);
    }
}

export default CreateTeamPage;