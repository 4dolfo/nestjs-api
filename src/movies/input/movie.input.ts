import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MovieInput {
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
