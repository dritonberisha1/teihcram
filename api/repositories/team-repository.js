import uuid from 'uuid/v4';
import config from '../config';
import _ from 'lodash';
import BaseRepository from './base-repository';

const { AWS } = config;
const teamTableName = process.env.AWS_DYNAMODB_TEAMS_TABLE_NAME;

class TeamRepository extends BaseRepository {

    async createTeam(team) {
        const entity = _.merge({}, this._pruneEmptyProperties(team));
        entity.id = uuid();
        entity.createdOn = new Date().toISOString();
        const docClient = new AWS.DynamoDB.DocumentClient();

        const params = {
            TableName: teamTableName,
            Item: entity
        };

        return await docClient.put(params).promise()
            .then(() => { return entity; })
            .catch(error => error);
    }

    async fetchTeams() {
        const docClient = new AWS.DynamoDB.DocumentClient();
        const params = {
            TableName: teamTableName
        };
        const response = await docClient.scan(params).promise();
        return response && response.Items;
    }
}

export default new TeamRepository();