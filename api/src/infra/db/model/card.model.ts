import mongoose from 'mongoose';
const { Schema } = mongoose;

export interface Card {
  // id: string;
  title: string;
  category: string;
  content: any;
}

export const CardModel = mongoose.model<Card>(
  'Card',
  new Schema<Card>(
    {
      title: { type: String, required: true },
      category: { type: String, required: true },
      content: { type: Object, required: true },
      // created_at: { type: Date, default: Date.now },
    },
    { timestamps: true },
  ),
);

// async function main() {
// await mongoose.connect('mongodb://localhost:27017', {
//     user: 'root',
//     pass: 'root',
//     dbName: 'canvas',
//   });

//   const Card = mongoose.model(
//     'Card',
//     new Schema(
//       {
//         title: { type: String, required: true },
//         content: Object,
//         // created_at: { type: Date, default: Date.now },
//       },
//       { timestamps: true },
//     ),
//   );

//   const card = new Card({ title: 'small', content: { fulano: 'sicrano' } });
//   card.save(function (err) {
//     if (err) console.log(err);
//     console.log('saved');
//   });
// }

// main();
