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

export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = res.locals.employee;

    res.status(200).json({ data: employee });
  } catch (error) {
    res.status(500).json({ error: "Gagal ambil employee berdasarkan ID" });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const newEmployee = await EmployeeService.createEmployee(req.body);

    res.status(201).json({
      message: "Data employee berhasil di tambah",
      data: newEmployee,
    });
  } catch (error) {
    res.status(500).json({ error: "Gagal menambah" });
  }
};

export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await EmployeeService.updateEmployee(Number(id), req.body);

    res.status(200).json({ message: "Update berhasil" });
  } catch (error) {
    res.status(500).json({ error: "Gagal update" });
  }
};

export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await EmployeeService.deleteEmployee(Number(id));

    res
      .status(200)
      .json({ message: "Employee berhasil dihapus", data: deleted });
  } catch (error) {
    res.status(500).json({ error: "Gagal delete" });
  }
};
