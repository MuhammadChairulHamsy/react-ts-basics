import { Request, Response, NextFunction } from "express";

export const validationUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, email, company } = req.body;

  if (!name || !email || !company) {
    return res.status(400).json({
      message:
        "Kolom tidak lengkap! Nama, deskripsi, gambar, dan harga wajib diisi.",
    });
  }

  next();
};
