import BaseService from './base-service';
import employees from '../data/employees.json';
class EmployeeService extends BaseService {
    fetchEmployees() {
        return new Promise((resolve, reject) => {
            return resolve(employees);
        })
    }
}

export default new EmployeeService();