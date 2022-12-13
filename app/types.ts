export interface Framework {
  id: string;
  name: string;
};

export type Status = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type?: string;
  gender?: Gender;
  origin?: {
    name: string;
    url: string;
  },
  location?: {
    name: string;
    url: string;
  },
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
};
