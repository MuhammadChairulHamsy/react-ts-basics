import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  getEmployeeById,
  updateEmployee,
} from "../controllers/employee.controller.js";
import { validationEmployee } from "../middlewares/employee.validation.js";
import { checkEmployeeExits } from "../middlewares/employee.exits.js";

const router = Router();
router.get("/", getEmployee);
router.get("/:id", checkEmployeeExits, getEmployeeById);
router.post("/", validationEmployee, createEmployee);
router.put("/:id", validationEmployee, updateEmployee);
router.delete("/:id", checkEmployeeExits, deleteEmployee);

export default router;
