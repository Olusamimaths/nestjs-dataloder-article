import { Module } from '@nestjs/common';
import { FriendRepository } from './friend.repository';
import { FriendService } from './friend.service';

@Module({
  providers: [FriendService, FriendRepository],
  exports: [FriendService],
})
export class FriendModule {}
