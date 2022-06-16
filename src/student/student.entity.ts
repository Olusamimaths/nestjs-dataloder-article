import { Field, ObjectType } from '@nestjs/graphql';
import { Friend } from 'src/friend/friend.entity';

@ObjectType()
export class Student {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  class: string;

  @Field(() => [Friend])
  friends?: Friend[];
}
