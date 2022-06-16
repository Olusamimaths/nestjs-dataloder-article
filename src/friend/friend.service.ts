import { Injectable } from '@nestjs/common';
import { Friend } from './friend.entity';
import { FriendRepository } from './friend.repository';

@Injectable()
export class FriendService {
  constructor(private readonly friendRepository: FriendRepository) {}

  public async getStudentFriends(studentId: number): Promise<Friend[]> {
    return await this.friendRepository.getStudentFriends(studentId);
  }

  public async getAllByStudentIds(
    studentIds: readonly number[],
  ): Promise<Friend[]> {
    return await this.friendRepository.getAllByStudentIds(studentIds);
  }

  public async getStudentsFriendsByBatch(
    studentIds: readonly number[],
  ): Promise<(Friend | any)[]> {
    const friends = await this.getAllByStudentIds(studentIds);

    const mappedResults = this._mapResultToIds(studentIds, friends);
    return mappedResults;
  }

  private _mapResultToIds(studentIds: readonly number[], friends: Friend[]) {
    return studentIds.map(
      (id) =>
        friends.filter((friend: Friend) => friend.studentId === id) || null,
    );
  }
}
