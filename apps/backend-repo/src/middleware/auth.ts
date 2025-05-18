import { NextFunction, Request, Response } from "express";

export default async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log("masuk middleware");
  next();
}
