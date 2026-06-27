import prisma from "../db/prisma.js";

const fetchLeaderBoardsService = async () => {
  return await prisma.users.findMany({
    orderBy: { score: "desc" },
  });
};

const createRecordService = async (name: string, score: number) => {
  return await prisma.users.create({
    data: {
      name,
      score,
    },
  });
};

export { fetchLeaderBoardsService, createRecordService };
