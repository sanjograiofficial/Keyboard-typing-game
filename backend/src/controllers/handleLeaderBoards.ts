import type { Request, Response } from "express";
import { fetchLeaderBoardsService } from "../services/LeaderBoards.service.js";

const getLeaderBoards = async () => {
  await fetchLeaderBoardsService();
};

export { getLeaderBoards };
