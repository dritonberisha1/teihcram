import BaseService from './base-service';
import companies from '../data/companies.json';
class CompanyService extends BaseService {
    fetchCompanies() {
        return new Promise((resolve, reject) => {
            return resolve(companies);
        })
    }
}

export default new CompanyService();