import { Schema, model } from 'mongoose';

export interface Team {
  name: string;
  members: Schema.Types.ObjectId[];
}

const teamSchema = new Schema<Team>(
  {
    name: { type: String, required: true },
    members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
);

export default model<Team>('Team', teamSchema);