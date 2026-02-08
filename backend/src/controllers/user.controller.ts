import { Request, Response } from "express";
import * as UserService from "../services/user.service.js";

export const getUser = async (req: Request, res: Response) => {
  try {
    const data = await UserService.findAllUser();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Gagal ambil data" });
  }
};
