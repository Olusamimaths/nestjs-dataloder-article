import { Injectable } from '@nestjs/common';
import { friends } from '../data';
import { Friend } from './friend.entity';

@Injectable()
export class FriendRepository {
  public async getStudentFriends(studentId: number): Promise<Friend[]> {
    console.log(`SELECT * FROM friends WHERE studentId = ${studentId}`);
    return friends.filter((friend) => friend.studentId === studentId);
  }
}
