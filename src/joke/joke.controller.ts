import { Controller, Get, Param } from '@nestjs/common';
import { JokeService } from './joke.service';
import { Joke } from './schemas/joke.schema';
import { ApiAcceptedResponse, ApiParam } from '@nestjs/swagger';

@Controller('jokes')
export class JokeController {
  constructor(private jokeService: JokeService) {}

  @Get(':type')
  @ApiAcceptedResponse({
    description: 'The joke has been successfully found.',
    type: Joke,
  })
  @ApiParam({
    name: 'type',
    description: 'The type of joke to search for.',
    required: true,
    type: 'string',
  })
  async findOne(@Param() params: any): Promise<Joke[]> {
    return this.jokeService.getJokeByType(params.type);
  }
}
