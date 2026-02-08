import { Request, Response } from "express";
import * as EmployeeService from "../services/employee.service.js";

export const getEmployee = async (req: Request, res: Response) => {
  try {
    const data = await EmployeeService.findAllEmployee();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Gagal ambil data" });
  }
};
