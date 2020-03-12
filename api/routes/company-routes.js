import { Router } from 'express';
import companyService from '../services/company-service';

const router = Router();

router.get('/', async (request, response) => {
    try {
        const result = await companyService.fetchCompanies();
        return response.json(result);
    } catch (error) {
        console.error("FETCH_COMPANIES_ERROR", error);
        return response.status(500).json({ message: 'Inernal Server Error' });
    }
});

export default router;