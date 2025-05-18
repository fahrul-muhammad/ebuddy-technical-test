import UserCollection from "apps/backend-repo/src/repository/userCollection";
import { Request, Response } from "express";

export default class Api {
  userCollection: UserCollection;

  constructor(user: UserCollection) {
    this.userCollection = user;
  }

  public fetchAllData = async (req: Request, res: Response): Promise<any> => {
    try {
      const data = await this.userCollection.getAllUser();
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };

  public updateUserData = async (req: Request, res: Response): Promise<any> => {
    try {
      const data = await this.userCollection.updateDataUser();
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  };
}
