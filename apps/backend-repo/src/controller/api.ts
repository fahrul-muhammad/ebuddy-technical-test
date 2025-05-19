import { Request, Response } from "express";
import { User } from "../entities/user";
import { generateToken } from "../helpers/generateToken";
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
      const newData: User = req.body;

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

  public SingIn = async (req: Request, res: Response): Promise<any> => {
    try {
      const { email, password } = req.body;
      const userData = await this.userCollection.getDataByEmail(email);
      if (password == userData.password) {
        return res.status(200).json({ message: "Login Success", token: generateToken(email) });
      }
      if (password != userData.password) {
        return res.status(401).json({ message: "Wrong Email or Password" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error from server", error });
    }
  };

  public SingUp = async (req: Request, res: Response): Promise<any> => {
    try {
      const { email, password, fullName } = req.body;
      await this.userCollection.createData({ email, password, fullName });
      return res.status(200).json({ message: "User Added Sucsessfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error from server", error });
    }
  };
}
