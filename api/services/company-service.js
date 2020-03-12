import companyRepository from '../repositories/company-repository';

class CompanyService {

    async fetchCompanies() {
        return companyRepository.fetchCompanies();
    }
}

export default new CompanyService();