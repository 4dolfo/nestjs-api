import { Document } from 'mongoose';

export interface Movie extends Document {
  name: string;
  description: string;
  added: number;
  poster: string;
  rating: number;
}
