import mongoose from 'mongoose';
import Activity from '../models/Activity';
import LeaderboardEntry from '../models/LeaderboardEntry';
import Team from '../models/Team';
import User from '../models/User';
import Workout from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Team.deleteMany({}),
      User.deleteMany({}),
      Workout.deleteMany({})
    ]);

    const users = await User.insertMany([
      { name: 'Mona Octavius', email: 'mona.octavius@example.com', role: 'coach' },
      { name: 'Devon Trail', email: 'devon.trail@example.com', role: 'member' },
      { name: 'Priya Pace', email: 'priya.pace@example.com', role: 'member' },
      { name: 'Sam Circuit', email: 'sam.circuit@example.com', role: 'member' }
    ]);

    await Team.insertMany([
      { name: 'Octo Striders', members: [users[0]._id, users[1]._id] },
      { name: 'Core Crushers', members: [users[2]._id, users[3]._id] }
    ]);

    await Activity.insertMany([
      { user: users[1]._id, type: 'Trail run', durationMinutes: 42, recordedAt: new Date('2026-08-05T13:30:00Z') },
      { user: users[2]._id, type: 'Strength circuit', durationMinutes: 35, recordedAt: new Date('2026-08-06T16:00:00Z') },
      { user: users[3]._id, type: 'Indoor cycling', durationMinutes: 50, recordedAt: new Date('2026-08-07T11:15:00Z') },
      { user: users[0]._id, type: 'Mobility coaching', durationMinutes: 30, recordedAt: new Date('2026-08-08T14:45:00Z') }
    ]);

    await LeaderboardEntry.insertMany([
      { user: users[2]._id, points: 1480, rank: 1 },
      { user: users[3]._id, points: 1395, rank: 2 },
      { user: users[1]._id, points: 1260, rank: 3 },
      { user: users[0]._id, points: 1185, rank: 4 }
    ]);

    await Workout.insertMany([
      {
        title: 'Morning Mobility Reset',
        description: 'A low-impact routine focused on hips, shoulders, and spine mobility.',
        difficulty: 'beginner',
        durationMinutes: 20
      },
      {
        title: 'Tempo Run Builder',
        description: 'Intervals that build aerobic endurance with controlled tempo efforts.',
        difficulty: 'intermediate',
        durationMinutes: 45
      },
      {
        title: 'Full-Body Power Circuit',
        description: 'Compound strength movements paired with short conditioning blocks.',
        difficulty: 'advanced',
        durationMinutes: 40
      }
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
