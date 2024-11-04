import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateJokeDto } from './dto/create-joke.dto';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {
  constructor(private readonly jokesService: JokesService) {}

  @Post()
  create(@Body() createJokeDto: CreateJokeDto) {
    return this.jokesService.create(createJokeDto);
  }

  @Get()
  findAll() {
    return this.jokesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jokesService.findOne(+id);
  }

  @Get('randomByType/:type')
  findRandom(@Param('type') type: string) {
    return this.jokesService.findRandom(type);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jokesService.remove(+id);
  }
}
