import { Profile } from './profile.model';

export interface Comment {
  id: number;
  body: string;
  createAt: string;
  author: Profile;
}