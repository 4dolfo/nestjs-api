import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MovieInput } from 'src/movies/input/movie.input';
import { Movie } from 'src/movies/interface/movie.interface';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel('CL_MOVIE') private readonly movieModel: Model<Movie>,
  ) {}

  async getAll(): Promise<Movie[]> {
    try {
      return await this.movieModel.find().exec();
    } catch (Exception) {
      return null;
    }
  }
  async search(input: string): Promise<Movie[]> {
    try {
      return await this.movieModel
        .find({
          name: { $regex: input },
        })
        .exec();
    } catch (Exception) {
      return null;
    }
  }
  /*
  async getById(id: string): Promise<Movie> {
    try {
      const movie = this.movieModel.findById((item) => item.id == id);
      return await movie;
    } catch (Exception) {
      return null;
    }
  }
*/
  async create(input: MovieInput): Promise<Movie> {
    try {
      const createdMovie = new this.movieModel(input);
      return await createdMovie.save();
    } catch (Exception) {
      return null;
    }
  }

  async update(id: string, input: MovieInput): Promise<Movie> {
    try {
      return await this.movieModel
        .findByIdAndUpdate(id, input, { new: true })
        .exec();
    } catch (Exception) {
      return null;
    }
  }
  /*
  async delete(id: string) {
    try {
      await this.movieModel.deleteOne({ _id: id }).exec();
    } catch (Exception) {
      return null;
    }
  }
*/
}
