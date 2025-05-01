import { Router, Request, Response } from 'express';
import Task from '../models/Task';

const router = Router();

router.get('/', async (request: Request, response: Response) => {
    const tasks = await Task.findAll();
});

export default router;
