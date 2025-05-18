import express, { Router } from "express";
import Api from "../controller/api";
import AuthMiddleware from "../middleware/auth";
import UserCollection from "../repository/userCollection";

const userRoutes: Router = express.Router();
const userRepo = new UserCollection("testt");
const userController = new Api(userRepo);

userRoutes.get("/fetch-user-data", AuthMiddleware, userController.fetchAllData);
// userRoutes.get("/update-user-data", userController.)

export default userRoutes;
