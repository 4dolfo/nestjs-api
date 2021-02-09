import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Movie } from 'src/movies/interface/movie.interface';

import { MovieService } from 'src/movies/shared/services/movie.service';

@Controller('movies')
export class MoviesController {
  constructor(private movieService: MovieService) {}
  @Get()
  async getAll(): Promise<Movie[]> {
    return this.movieService.getAll();
  }
  @Post()
  async create(@Body() movie: Movie): Promise<Movie> {
    console.log('create');
    return this.movieService.create(movie);
  }

  /*
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Movie> {
    return this.movieService.getById(id);
  }
  
  @Post()
  async create(@Body() movie: Movie): Promise<Movie> {
    console.log("create");
    return this.movieService.create(movie);
  }
  
  @Put(':id')
  async update(@Param('id') id: string, @Body() movie: Movie): Promise<Movie> {
    return this.movieService.update(id, movie);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.movieService.delete(id);
  }
  */
}
