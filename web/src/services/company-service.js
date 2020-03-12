import BaseService from './base-service';

class CompanyService extends BaseService {
    fetchCompanies() {
        return this._apiGet({
            path: `/companies`,
            auth: false
        });
    }
}

export default new CompanyService();