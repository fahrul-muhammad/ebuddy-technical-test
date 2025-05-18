import { User as UserEntity } from "../entities/user";

export default class UserCollection {
  database: string;
  constructor(db: string) {
    this.database = db;
  }
  public async getAllUser(): Promise<UserEntity> {
    const data: UserEntity = {
      id: "001",
      fullName: "ebiebi",
      email: "ebi@email.com",
      password: "12345",
      createdAt: new Date(),
      updateAt: undefined,
    };

    return data;
  }

  public async updateDataUser(): Promise<any> {
    return "Hello User";
  }
}
