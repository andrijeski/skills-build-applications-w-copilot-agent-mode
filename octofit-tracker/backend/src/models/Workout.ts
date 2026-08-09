import { Schema, model } from 'mongoose';

export interface Workout {
  title: string;
  description: string;
  difficulty: string;
  durationMinutes: number;
}

const workoutSchema = new Schema<Workout>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, default: 'beginner' },
    durationMinutes: { type: Number, required: true, min: 0 }
  },
  { timestamps: true }
);

export default model<Workout>('Workout', workoutSchema);