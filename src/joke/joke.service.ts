import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Joke } from './schemas/joke.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class JokeService {
  constructor(
    @InjectModel(Joke.name)
    private jokeModel: mongoose.Model<Joke>,
  ) {}

  async getAllJokes(): Promise<Joke[]> {
    const jokes = await this.jokeModel.find().exec();
    return jokes;
  }

  async getJokeByType(type: string): Promise<Joke[]> {
    console.log(type);
    const jokes = await this.jokeModel.find({ type }).exec();
    return jokes;
  }
}
