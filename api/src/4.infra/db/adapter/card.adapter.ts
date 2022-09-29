import { CardSchema } from './../model/card.model';
import { Card, CardCategory } from '../../../1.domain/model/card';
export class CardAdapter {
  static adaptList(data: CardSchema[]): Card[] {
    return data.map((record: CardSchema) => {
      return this.adapt(record);
    });
  }
  static adapt(record: CardSchema) {
    const card: Card = {
      id: record._id.toString(),
      title: record.title,
      category: CardCategory[record.category],
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      content: record.content,
    };

    return card;
  }
}
