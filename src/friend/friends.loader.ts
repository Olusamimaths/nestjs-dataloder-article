import * as DataLoader from 'dataloader';
import { Friend } from './friend.entity';
import { FriendService } from './friend.service';

export function createFriendsLoader(friendService: FriendService) {
  return new DataLoader<number, Friend>(async (studentIds) => {
    const friends = await friendService.getAllByStudentIds(studentIds);

    const mappedResults = _mapResultToIds(studentIds, friends);
    return mappedResults;
  });
}

function _mapResultToIds(studentIds: readonly number[], friends: Friend[]) {
  return studentIds.map(
    (id) =>
      friends.find((friend: Friend) => friend.studentId === id) ||
      new Error(`Could not load friend ${id}`),
  );
}
