import mongoose, { Schema, Types } from 'mongoose';

export interface CardSchema {
  _id: Types.ObjectId;
  title: string;
  category: string;
  content: any;
  createdAt: Date;
  updatedAt: Date;
}

export const CardModel = mongoose.model<CardSchema>(
  'Card',
  new Schema<CardSchema>(
    {
      title: { type: String, required: true },
      category: { type: String, required: true },
      content: { type: Object, required: true },
      // created_at: { type: Date, default: Date.now },
    },
    { timestamps: true },
  ),
);
