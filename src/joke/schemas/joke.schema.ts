import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Joke {
  @Prop()
  text: string;
  @Prop()
  type: string;
}

export const JokeSchema = SchemaFactory.createForClass(Joke);
