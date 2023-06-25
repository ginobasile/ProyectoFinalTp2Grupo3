import { Router } from "express";
const userRoutes=Router();
import UserController from "../Controllers/UserController.js";
import {validateAccess,isAdmin} from "../middleware/validateAccess.js";
const userController = new UserController()
 
userRoutes.post("/login", userController.login);
userRoutes.post("/", userController.createUser);

userRoutes.use(validateAccess);
// abajo de esta linea utiliza validateAccess

userRoutes.post("/logout", userController.logout);

userRoutes.get("/", isAdmin, userController.getAllUsers);
userRoutes.get("/me" , userController.me);
userRoutes.get("/:id", userController.getUserById);

userRoutes.put("/:id", userController.putUserById);

userRoutes.delete("/:id",isAdmin, userController.deleteUserById);

export default userRoutes;