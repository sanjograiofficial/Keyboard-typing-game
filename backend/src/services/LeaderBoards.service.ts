import prisma from "../db/prisma.js";

const fetchLeaderBoardsService = async () => {
  return await prisma.player.findMany({
    orderBy: { score: "desc" },
    take: 10,
  });
};

const createRecordService = async (name: string, score: number) => {
  return await prisma.player.create({
    data: {
      name,
      score,
    },
  });
};

export { fetchLeaderBoardsService, createRecordService };
