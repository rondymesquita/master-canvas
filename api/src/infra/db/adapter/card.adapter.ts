import { CardSchema } from '../model/card.model';
import { Card, CardCategory } from '../../../domain/model/card';
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
      active: record.active,
      category: CardCategory[record.category],
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      content: record.content,
    };

    return card;
  }
}
