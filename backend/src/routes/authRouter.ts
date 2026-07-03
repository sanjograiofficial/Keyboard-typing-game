import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authHandler.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", authMiddleware, loginUser);

export default router;
