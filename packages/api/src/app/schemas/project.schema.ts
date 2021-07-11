import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { App } from './app.schema';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop()
  name: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'App' }] })
  app: App[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
