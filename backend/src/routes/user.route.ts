import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";
import { checkUserExits } from "../middlewares/user.exits.js";
import { validationUser } from "../middlewares/user.validation.js";

const route = Router();
route.get("/", getUser);
route.get("/id", checkUserExits, getUserById);
route.post("/", validationUser, createUser);
route.put("/:id", validationUser, updateUser);
route.delete("/:id", checkUserExits, deleteUser);

export default route;
