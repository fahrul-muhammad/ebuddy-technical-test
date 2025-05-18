import express, { Router } from "express";
import { db } from "../config/firebaseConfig";
import Api from "../controller/api";
import AuthMiddleware from "../middleware/auth";
import UserCollection from "../repository/userCollection";

const userRoutes: Router = express.Router();
const userRepo = new UserCollection(db);
const userController = new Api(userRepo);

userRoutes.get("/fetch-user-data", AuthMiddleware, userController.fetchAllData);

export default userRoutes;
