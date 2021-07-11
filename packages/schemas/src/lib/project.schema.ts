import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { App } from './app.schema';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
@ObjectType()
export class Project {
  @Prop()
  @Field()
  name: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'App' }] })
  @Field(() => [App])
  app: App[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
