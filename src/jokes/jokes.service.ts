import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './entities/joke.entity';

@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(Joke) private jokeRepository: Repository<Joke>,
  ) {}

  create(createJokeDto: CreateJokeDto) {
    const joke = new Joke();
    joke.text = createJokeDto.text;
    joke.type = createJokeDto.type;

    return this.jokeRepository.save(joke);
  }

  findAll() {
    return this.jokeRepository.find();
  }

  findOne(id: number) {
    return this.jokeRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return `This action removes a #${id} joke`;
  }
  findRandom(type: string) {
    return this.jokeRepository.query(
      'SELECT * FROM joke WHERE type = ? ORDER BY RAND() LIMIT 1',
      [type], // Here, 'type' will be the value bound to the placeholder.
    );
  }
}
