import mongoose, { Schema, Types } from 'mongoose';

export interface UserSchema {
  _id: Types.ObjectId;
  active: boolean;
  email: string;
  name: string;
  picture: string;
  createdAt: Date;
  updatedAt: Date;
}

export const UserModel = mongoose.model<UserSchema>(
  'User',
  new Schema<UserSchema>(
    {
      active: { type: Boolean, required: true, default: true, index: true },
      email: { type: String, required: true },
      name: { type: String, required: true },
      picture: { type: String, required: true },
    },
    { timestamps: true },
  ),
);
