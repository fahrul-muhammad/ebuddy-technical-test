export interface User {
  id: string;
  email: string;
  fullName: string;
  password?: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserUpdate {
  email?: string;
  fullName?: string;
  password?: string;
  id?: string;
}

export interface UserSignUp {
  email: string;
  password: string;
  fullName: string;
}

export interface LoginResponse {
  message: string;
  token: string;
}
