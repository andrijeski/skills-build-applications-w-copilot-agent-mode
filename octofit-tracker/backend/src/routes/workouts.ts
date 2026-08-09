import { Router } from 'express';
import Workout from '../models/Workout';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const workouts = await Workout.find().sort({ title: 1 });
    res.json(workouts);
  } catch (error) {
    next(error);
  }
});

export default router;