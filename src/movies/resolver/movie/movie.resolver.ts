import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MovieInput } from 'src/movies/input/movie.input';
import { Movie } from 'src/movies/interface/movie.interface';
import { MovieService } from 'src/movies/shared/services/movie.service';
import { MovieType } from 'src/movies/type/movie.type';

@Resolver()
export class MovieResolver {
  constructor(private movieService: MovieService) {}
  @Query((returns) => [MovieType])
  async movies() {
    return this.movieService.getAll();
  }
  @Mutation((returns) => MovieType)
  async create(@Args('input') input: MovieInput) {
    return this.movieService.create(input);
  }

  @Query((returns) => [MovieType])
  async search(@Args('input') input: string) {
    return this.movieService.search(input);
  }

  @Mutation((returns) => MovieType)
  async update(@Args('id') id: string, @Args('input') input: MovieInput) {
    return this.movieService.update(id, input);
  }
}
