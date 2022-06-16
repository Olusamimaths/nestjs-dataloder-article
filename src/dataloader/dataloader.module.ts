import { Module } from '@nestjs/common';
import { FriendModule } from '../friend/friend.module';
import { DataloaderService } from './dataloader.service';

@Module({
  imports: [FriendModule],
  providers: [DataloaderService],
  exports: [DataloaderService],
})
export class DataloaderModule {}
