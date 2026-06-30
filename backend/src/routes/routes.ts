import { Router } from "express";
import {
  createRecord,
  getLeaderBoards,
} from "../controllers/handleLeaderBoards.js";
import authRouter from "./authRouter.js";

const router = Router();

router.get("/leaderboards", getLeaderBoards);
router.post("/leaderboards", createRecord);

router.use("/auth", authRouter);

export default router;
