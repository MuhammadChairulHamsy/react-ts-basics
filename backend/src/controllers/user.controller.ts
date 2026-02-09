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

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user;

    res.status(200).json({ data: user });
  } catch (error) {
    res.status(500).json({ error: "Gagal ambil user berdasarkan ID" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await UserService.createUser(req.body);

    res.status(201).json({
      message: "Data user berhasil di tambah",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Gagal ditambah" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await UserService.updateUser(Number(id), req.body);

    res.status(200).json({ message: "Update berhasil" });
  } catch (error) {
    res.status(500).json({ error: "Gagal update" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await UserService.deleteUser(Number(id));

    res.status(200).json({ message: "User berhasil dihapus", data: deleted });
  } catch (error) {
    res.status(500).json({ error: "Gagal delete" });
  }
};
