import { Router } from "express";
import { getLeaderBoards } from "../controllers/handleLeaderBoards.js";

const router = Router();

router.get("/leaderboards", getLeaderBoards);

export default router;
