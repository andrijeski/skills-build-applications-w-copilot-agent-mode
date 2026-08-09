import { Schema, model } from 'mongoose';

export interface User {
  name: string;
  email: string;
  role: string;
}

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'member' }
  },
  { timestamps: true }
);

export default model<User>('User', userSchema);