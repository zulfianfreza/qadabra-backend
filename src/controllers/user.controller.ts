import { NextFunction, Request, Response } from "express";
import * as UserService from "../services/user.service";

const index = async (req: Request, res: Response, next: NextFunction) => {
  const users = await UserService.getUsers();

  res.status(200).json({
    message: "success",
    data: users,
  });
};

export { index };
