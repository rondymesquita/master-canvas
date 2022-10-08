import mongoose, { Schema, Types } from 'mongoose';

export interface CanvasSchema {
  _id: Types.ObjectId;
  user: Types.ObjectId;
  active: boolean;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export const CanvasModel = mongoose.model<CanvasSchema>(
  'Canvas',
  new Schema<CanvasSchema>(
    {
      active: { type: Boolean, required: true, default: true },
      title: { type: String, required: true },
      user: { type: Schema.Types.ObjectId, required: true },
    },
    { timestamps: true },
  ),
);
