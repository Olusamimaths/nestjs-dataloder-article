import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentRepository } from './student.repository';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}

  public async getAll(): Promise<Student[]> {
    return await this.studentRepository.getAll();
  }
}
