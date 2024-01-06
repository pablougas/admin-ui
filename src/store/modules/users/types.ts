export interface User {
  id?: string | number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface UserState {
  users: User[];
  error: boolean;
}
