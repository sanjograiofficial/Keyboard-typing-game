import type { Request, Response } from "express";
import prisma from "../db/prisma.js";

const fetchLeaderBoardsService = async () => {
  return await prisma.users.findMany();
};

export { fetchLeaderBoardsService };
