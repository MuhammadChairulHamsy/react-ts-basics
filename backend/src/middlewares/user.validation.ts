import { Request, Response, NextFunction } from "express";

export const validationUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, email, address, company } = req.body;

  if (!name || !email || !address || !company) {
    return res.status(400).json({
      message:
        "Kolom tidak lengkap! Nama, email, address, dan company wajib diisi.",
    });
  }

  next();
};
