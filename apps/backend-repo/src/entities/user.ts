export interface User {
  id: string;
  email: string;
  fullName: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
