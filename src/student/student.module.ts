import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { FriendModule } from 'src/friend/friend.module';
import { StudentRepository } from './student.repository';

@Module({
  imports: [FriendModule],
  providers: [StudentService, StudentResolver, StudentRepository],
})
export class StudentModule {}
