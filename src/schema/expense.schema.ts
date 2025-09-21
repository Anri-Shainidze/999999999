import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExpenseDocument = HydratedDocument<Expense>;

@Schema({ timestamps: true })
export class Expense {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Number, min: 0 })
  price: number;

  @Prop({ required: true, type: String, enum: ['Food', 'Transport', 'Shopping', 'Bills', 'Other'] })
  category: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
