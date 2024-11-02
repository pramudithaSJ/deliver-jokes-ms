import { Module } from '@nestjs/common';
import { JokeController } from './joke.controller';
import { JokeService } from './joke.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JokeSchema } from './schemas/joke.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Joke', schema: JokeSchema }])],
  controllers: [JokeController],
  providers: [JokeService],
})
export class JokeModule {}
