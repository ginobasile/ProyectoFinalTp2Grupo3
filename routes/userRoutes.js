import { Router } from "express";
import User from "../Models/User.js"
const userRoutes=Router()
 
userRoutes.get("/", (req, res)=>{
    res.send("Get all users")
})

export default userRoutes