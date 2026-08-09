import { Router } from 'express';
import LeaderboardEntry from '../models/LeaderboardEntry';

const router = Router();

router.get('/', async (_req, res, next) => {
  try {
    const leaderboard = await LeaderboardEntry.find().populate('user').sort({ rank: 1 });
    res.json(leaderboard);
  } catch (error) {
    next(error);
  }
});

export default router;