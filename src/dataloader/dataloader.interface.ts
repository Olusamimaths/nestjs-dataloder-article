import DataLoader from 'dataloader';
import { Friend } from '../friend/friend.entity';

export interface IDataloaders {
  friendsLoader: DataLoader<number, Friend>;
}
