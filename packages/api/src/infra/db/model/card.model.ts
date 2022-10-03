import mongoose, { Schema, Types } from 'mongoose';

export interface CardSchema {
  _id: Types.ObjectId;
  active: boolean;
  title: string;
  category: string;
  content: any;
  canvas: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export const CardModel = mongoose.model<CardSchema>(
  'Card',
  new Schema<CardSchema>(
    {
      active: { type: Boolean, required: true, default: true },
      title: { type: String, required: true },
      category: { type: String, required: true },
      content: { type: Object, required: true },
      canvas: { type: Schema.Types.ObjectId, required: true },
      // created_at: { type: Date, default: Date.now },
    },
    { timestamps: true },
  ),
);
