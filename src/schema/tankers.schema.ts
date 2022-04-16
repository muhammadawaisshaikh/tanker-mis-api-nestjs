import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TankerDocument = Tanker & Document;

@Schema()
export class Tanker {
  @Prop({ required: true })
  numberPlate: string;

  @Prop({ required: true })
  nameType: string;

}

export const TankerSchema = SchemaFactory.createForClass(Tanker);