import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 } from 'uuid';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop({ unique: true, default: () => v4() })
  id: string;

  @Prop()
  name: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project)
