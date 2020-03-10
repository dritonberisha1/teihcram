import BaseService from './base-service';

class ChallengeService extends BaseService {
    getTotalMinutes() {
        return new Promise((resolve, reject) => {
            resolve(4320)
        })
    }

    fetchCompanyTotals() {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    name: "Volvo",
                    totalMinutes: 310
                },
                {
                    name: "Scania",
                    totalMinutes: 230
                },
                {
                    name: "Tele2",
                    totalMinutes: 160
                }
            ])
        })
    }

    fetchTeams() {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    name: "SomeTeam",
                    minutes: 50,
                    email: "driton.berisha@alten.se"
                }
            ])
        })
    }
}

export default new ChallengeService();