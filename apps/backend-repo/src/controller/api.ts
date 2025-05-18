import { Request, Response } from "express";
import UserCollection from "../repository/userCollection";

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
      const { id } = req.params;
      const newData = req.body;

      if (!id || !newData) {
        return res.status(400).json({ message: "Missing id or body data" });
      }

      const result = await this.userCollection.updateDataUser(id, newData);
      return res.status(200).json({ message: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed to update user", error });
    }
  };
}
