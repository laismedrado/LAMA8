import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";


export const userRouter = express.Router();

const userDataBase = new UserDatabase()
const userBusiness = new UserBusiness(userDataBase)
const userController = new UserController(userBusiness)

userRouter.post("/signup", userController.signup.bind(userController));
userRouter.post("/login", (req, res) => userController.login(req, res));
// bandRouter.post("/band", (req, res) => bandController.createBandController(req,res))