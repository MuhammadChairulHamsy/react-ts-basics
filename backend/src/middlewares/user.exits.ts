import { Request, Response, NextFunction } from "express";
import * as UserService from "../services/user.service.js";

export const checkUserExits = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  if (isNaN(Number(id))) {
    return res.status(400).json({ message: "Id harus berupa angka!" });
  }

  try {
    const user = await UserService.findUserById(Number(id));

    if (!user) {
      return res.status(400).json({ message: "User tidak ditemukan!" });
    }

    res.locals.user = user;
    next();
  } catch (error) {
    res.status(500).json({error: "Terjadi kesalahan"});
  }
};
