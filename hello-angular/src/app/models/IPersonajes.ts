export interface IPersonajes {
  count: number;
  next: string;
  prev: null;
  pages: number;
  results: Result[];
}

export interface Result {
  id: number;
  age: number | null;
  birthdate: Date | null;
  gender: Gender;
  name: string;
  occupation: string;
  portrait_path: string;
  phrases: string[];
  status: Status;
}

export type Gender = 'Male' | 'Female';

export type Status = 'Alive' | 'Deceased';
