import { Router } from "express";
const userRoutes=Router();
import UserController from "../Controllers/UserController.js";

const UserController = new UserController
 
userRoutes.get("/", UserController.getAllUsers);
userRoutes.get("/:id", UserController.getUserById);
userRoutes.post("/", UserController.createUser);
userRoutes.put("/:id", UserController.putUserById);
userRoutes.delete("/:id", UserController.deleteUserById);

export default userRoutes