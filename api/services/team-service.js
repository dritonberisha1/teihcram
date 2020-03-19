import teamRepository from '../repositories/team-repository';
import _ from 'lodash';

class TeamService {
    async createTeam(team, user) {
        const teamWithEmail = _.merge({}, team, { email: user && user.email });
        return teamRepository.createTeam(teamWithEmail);
    }

    async fetchTeams() {
        return teamRepository.fetchTeams();
    }
}

export default new TeamService();