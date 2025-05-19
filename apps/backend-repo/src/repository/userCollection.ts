import { Firestore } from "firebase-admin/firestore";
import { User as UserEntity } from "../entities/user";

export default class UserCollection {
  private firestore: Firestore;

  constructor(db: Firestore) {
    this.firestore = db;
  }

  public async getAllUser(): Promise<UserEntity[]> {
    const snapshot = await this.firestore.collection("USERS").get();
    const users: UserEntity[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      users.push({
        id: doc.id,
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });
    });

    return users;
  }

  public async updateDataUser(id: string, newData: Partial<UserEntity>): Promise<string> {
    await this.firestore.collection("USERS").doc(id).update(newData);
    return `User with ID ${id} updated successfully.`;
  }

  public async createData(newData: Partial<UserEntity>): Promise<string> {
    await this.firestore.collection("USERS").add(newData);
    return `User added successfully.`;
  }

  public async getDataByEmail(email: string): Promise<any> {
    const snapshot = await this.firestore.collection("USERS").where("email", "==", email).limit(1).get();
    const user: UserEntity = {
      id: "",
      fullName: "",
      email: "",
      password: "",
    };
    snapshot.forEach((doc) => {
      const data = doc.data();
      user.id = doc.id;
      user.fullName = data.fullName;
      user.email = data.email;
      user.password = data.password;
    });
    return user;
  }
}
