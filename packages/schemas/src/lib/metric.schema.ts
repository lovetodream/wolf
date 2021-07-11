import { ObjectType } from '@nestjs/graphql';
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MetricDocument = Metric & Document;

@Schema({ timestamps: true })
@ObjectType()
export class Metric {}

export const MetricSchema = SchemaFactory.createForClass(Metric);
