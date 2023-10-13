import express, { Router } from "express";
import * as UserController from "../controllers/user.controller";

const router: Router = express.Router();

router.get("/users", UserController.index);

export default router;
