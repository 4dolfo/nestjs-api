import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MovieType {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field(() => Number)
  readonly added: number;
  @Field()
  readonly poster: string;
  @Field(() => Number)
  readonly rating: number;
}
