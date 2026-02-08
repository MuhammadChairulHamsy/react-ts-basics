import { Router } from "express";
import { getEmployee } from "../controllers/employee.controller.js";

const router = Router();
router.get("/", getEmployee);

export default router;