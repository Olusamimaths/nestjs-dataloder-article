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
}
