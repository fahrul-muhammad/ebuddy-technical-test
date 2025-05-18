export interface User {
  id: string;
  email: string;
  fullName: string;
  password: string;
  createdAt: Date;
  updateAt?: Date;
}
