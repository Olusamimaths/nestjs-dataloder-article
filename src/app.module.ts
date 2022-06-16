import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StudentModule } from './student/student.module';
import { FriendModule } from './friend/friend.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => {
        return {
          autoSchemaFile: true,
        };
      },
    }),

    StudentModule,
    FriendModule,
  ],
})
export class AppModule {}
