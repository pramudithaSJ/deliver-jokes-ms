import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Joke } from './jokes/entities/joke.entity';
import { JokesModule } from './jokes/jokes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [Joke],
      synchronize: true,
    }),
    JokesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
