import { Router } from 'express';
import teamService from '../services/team-service';

const router = Router();

router.post('/', async (request, response) => {
    try {
        const result = await teamService.createTeam(request.body, request.user);
        return response.json(result);
    } catch (error) {
        console.error("CREAT_TEAM_ERROR", error);
        return response.status(500).json({ message: 'Inernal Server Error' });
    }
});

router.get('/', async (request, response) => {
    try {
        const result = await teamService.fetchTeams();
        return response.json(result);
    } catch (error) {
        console.error("FETCH_TEAMS_ERROR", error);
        return response.status(500).json({ message: 'Inernal Server Error' });
    }
});

export default router;