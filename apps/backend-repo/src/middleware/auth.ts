import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(401).json({ message: "Please Login" });
    return;
  }

  const token = authHeader.replace("Bearer ", "");
  if (!token) {
    res.status(401).json({ message: "Unauthorized: Token not provided" });
    return;
  }

  try {
    jwt.verify(token, JWT_SECRET, (err, payload) => {
      if (err) {
        console.log("error : ", err);
        res.status(403).json({ message: "Forbidden: Invalid token" });
        return;
      }
      return next();
    });
  } catch (error) {
    res.status(403).json({ message: "Forbidden: Invalid token" });
    return;
  }
}
