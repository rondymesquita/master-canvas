import mongoose, { Model, Schema, Types } from 'mongoose';
export interface CardSchema {
  _id: Types.ObjectId;
  active: boolean;
  code: number;
  title: string;
  category: string;
  content: any;
  canvas: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<CardSchema>(
  {
    code: { type: Number },
    active: { type: Boolean, required: true, default: true, index: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    content: { type: Object, required: true },
    canvas: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true },
);

export const CardModel = mongoose.model<CardSchema>('Card', schema);
