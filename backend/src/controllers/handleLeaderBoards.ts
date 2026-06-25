import type { NextFunction, Request, Response } from "express";
import {
  createRecordService,
  fetchLeaderBoardsService,
} from "../services/LeaderBoards.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getLeaderBoards = asyncHandler(async (req: Request, res: Response) => {
  const leaderboard = await fetchLeaderBoardsService();
  res.status(200).json({
    message: "Fetched leaderboard",
    data: leaderboard,
  });
});
const createRecord = asyncHandler(async (req: Request, res: Response) => {
  const { name, score } = req.body;
  const record = await createRecordService(name, score);
  res.status(201).json({
    message: "Created record",
    data: record,
  });
});
export { getLeaderBoards, createRecord };
