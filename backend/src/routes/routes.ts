import { Router } from "express";
import {
  createRecord,
  getLeaderBoards,
} from "../controllers/handleLeaderBoards.js";

const router = Router();

router.get("/leaderboards", getLeaderBoards);
router.post("/leaderboards", createRecord);

export default router;
