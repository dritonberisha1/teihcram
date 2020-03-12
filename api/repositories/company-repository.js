import config from '../config';
import BaseRepository from './base-repository';

const { AWS } = config;
const companyTableName = process.env.AWS_DYNAMODB_COMPANIES_TABLE_NAME;

class CompanyRepository extends BaseRepository {

    async fetchCompanies() {
        const docClient = new AWS.DynamoDB.DocumentClient();
        const params = {
            TableName: companyTableName
        };
        const response = await docClient.scan(params).promise();
        return response && response.Items;
    }
}

export default new CompanyRepository();