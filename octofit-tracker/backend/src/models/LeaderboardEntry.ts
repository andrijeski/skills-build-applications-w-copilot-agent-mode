import { Schema, model } from 'mongoose';

export interface LeaderboardEntry {
  user: Schema.Types.ObjectId;
  points: number;
  rank: number;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntry>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 }
  },
  { timestamps: true }
);

export default model<LeaderboardEntry>('LeaderboardEntry', leaderboardEntrySchema);