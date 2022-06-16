import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { Friend } from '../friend/friend.entity';
import { FriendService } from '../friend/friend.service';
import { IDataloaders } from './dataloader.interface';

@Injectable()
export class DataloaderService {
  constructor(private readonly friendsService: FriendService) {}

  getLoaders(): IDataloaders {
    const friendsLoader = this._createFriendsLoader();
    return {
      friendsLoader,
    };
  }

  private _createFriendsLoader() {
    return new DataLoader<number, Friend>(
      async (keys: readonly number[]) =>
        await this.friendsService.getStudentsFriendsByBatch(keys as number[]),
    );
  }
}
