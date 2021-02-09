import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/sismovie')],
})
export class MongodbModule {}
