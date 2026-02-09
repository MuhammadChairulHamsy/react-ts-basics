import { Request, Response, NextFunction } from "express";
import * as EmployeeService from "../services/employee.service.js";

export const checkEmployeeExits = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;
  if (isNaN(Number(id))) {
    return res.status(400).json({ message: "Id harus berupa angka!" });
  }

  try {
    const employee = await EmployeeService.findEmployeeById(Number(id));

    if (!employee) {
      return res.status(400).json({ message: "Employee tidak ditemukan!" });
    }

    res.locals.employee = employee;
    next();
  } catch (error) {
    res.status(500).json({error: "Terjadi kesalahan"});
  }
};
