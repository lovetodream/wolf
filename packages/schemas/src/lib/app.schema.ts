import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Project } from './project.schema';

export type AppDocument = App & Document;

export enum AppType {
  web = 'WEB',
  ios = 'IOS',
  android = 'ANDROID',
  other = 'OTHER',
}

const appTypeValues = Object.values(AppType);

@Schema({ timestamps: true })
export class App {
  @Prop({ enum: appTypeValues, required: true })
  type: AppType;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Project' }] })
  project: Project;
}

export const AppSchema = SchemaFactory.createForClass(App);
