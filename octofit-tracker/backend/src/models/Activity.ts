import { Schema, model } from 'mongoose';

export interface Activity {
  user: Schema.Types.ObjectId;
  type: string;
  durationMinutes: number;
  recordedAt: Date;
}

const activitySchema = new Schema<Activity>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true, min: 0 },
    recordedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default model<Activity>('Activity', activitySchema);