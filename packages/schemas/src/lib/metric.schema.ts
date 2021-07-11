import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MetricDocument = Metric & Document;

@Schema({ timestamps: true })
export class Metric {}

export const MetricSchema = SchemaFactory.createForClass(Metric);
