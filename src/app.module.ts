import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { GraphqlModule } from './graphql/graphql.module';
import { MongodbModule } from './mongodb/mongodb.module';

@Module({
  imports: [GraphqlModule, MoviesModule, MongodbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
