export interface Users {
  id: string;
  first_name?: string;
  last_name?: string;
  nick_name: string;
  email: string;
  hashed_password: string;
  inscription_time: number;
  avatar?: string;
  biography?: string;
}