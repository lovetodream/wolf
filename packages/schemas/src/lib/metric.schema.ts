import { Field, ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type MetricDocument = Metric & Document;

@Schema({ timestamps: true })
@ObjectType()
export class Metric {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

export const MetricSchema = SchemaFactory.createForClass(Metric);
