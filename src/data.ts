import { Friend } from './friend/friend.entity';
import { Student } from './student/student.entity';

export const students: Student[] = [
  { id: 1, name: 'John', class: '1A' },
  { id: 2, name: 'Jane', class: '1B' },
  { id: 3, name: 'Bob', class: '1C' },
  { id: 4, name: 'Mary', class: '1D' },
  { id: 5, name: 'Joshua', class: '1E' },
  { id: 6, name: 'Paul', class: '1F' },
  { id: 7, name: 'Mary', class: '1G' },
  { id: 8, name: 'Peter', class: '1H' },
  { id: 9, name: 'Paul', class: '1I' },
  { id: 10, name: 'Mary', class: '1J' },
];

export const friends: Friend[] = [
  { id: 1, name: 'Sam', studentId: 1 },
  { id: 2, name: 'Max', studentId: 2 },
  { id: 3, name: 'Halimat', studentId: 1 },
  { id: 4, name: 'Abdul', studentId: 3 },
  { id: 5, name: 'Jarul', studentId: 1 },
  { id: 6, name: 'Kamil', studentId: 10 },
  { id: 7, name: 'Tope', studentId: 4 },
  { id: 7, name: 'Seyi', studentId: 4 },
];
