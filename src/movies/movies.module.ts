import { Module } from '@nestjs/common';
import { MovieService } from './shared/services/movie.service';
import { MoviesController } from './controller/movies/movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieSchema } from './schemas/movie.schema';
import { MovieResolver } from './resolver/movie/movie.resolver';
import { MongodbModule } from 'src/mongodb/mongodb.module';
@Module({
  imports: [
    MongodbModule,
    MongooseModule.forFeature([{ name: 'CL_MOVIE', schema: MovieSchema }]),
  ],
  controllers: [MoviesController],
  providers: [MovieService, MovieResolver],
})
export class MoviesModule {}
