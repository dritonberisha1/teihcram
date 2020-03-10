import BaseService from './base-service';

class TeamService extends BaseService {
    createTeam(team) {
        return this._apiPost({
            path: `/teams`,
            data: team,
            auth: false
        });
    }

    fetchTeams() {
        return this._apiGet({
            path: `/teams`,
            auth: false
        });
    }
}

export default new TeamService();