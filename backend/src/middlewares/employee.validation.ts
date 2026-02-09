import { Request, Response, NextFunction } from "express";

export const validationEmployee = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, job } = req.body;

  if (!name || !job) {
    return res.status(400).json({
      message:
        "Kolom tidak lengkap! Nama, deskripsi, gambar, dan harga wajib diisi.",
    });
  }

  next();
};
