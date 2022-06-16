import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Friend {
  @Field()
  id: number;

  @Field()
  name: string;

  studentId: number;
}
