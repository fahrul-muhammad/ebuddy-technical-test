import express, { Router } from "express";
import { db } from "../config/firebaseConfig";
import Api from "../controller/api";
import AuthMiddleware from "../middleware/auth";
import UserCollection from "../repository/userCollection";

const userRoutes: Router = express.Router();
const userRepo = new UserCollection(db);
const userController = new Api(userRepo);

userRoutes.get("/fetch-user-data", AuthMiddleware, userController.fetchAllData);
userRoutes.put("/update-user-data/:id", AuthMiddleware, userController.updateUserData);
userRoutes.post("/seed-dummy", async (req, res) => {
  try {
    const dummyUsers = [
      {
        fullName: "Alice Johnson",
        email: "alice@example.com",
        password: "alice123",
        id: "111",
      },
      {
        fullName: "Bob Smith",
        email: "bob@example.com",
        password: "bob123",
        id: "222",
      },
      {
        fullName: "Charlie Brown",
        email: "charlie@example.com",
        password: "charlie123",
        id: "333",
      },
    ];

    const batch = db.batch();
    const userCollection = db.collection("USERS");

    dummyUsers.forEach((user) => {
      const docRef = userCollection.doc();
      batch.set(docRef, user);
    });

    await batch.commit();
    res.status(201).json({ message: "Dummy users added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to seed dummy data", error: err });
  }
});

export default userRoutes;
