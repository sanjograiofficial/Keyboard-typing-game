import type { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import prisma from "../db/prisma.js";

interface AuthUser {
  id: number;
  email: string;
  role: string;
  username: string;
}

const secretKey = process.env.SECRET_KEY;
if (!secretKey) throw new Error("Secret key is missing");
const authMiddleware = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization header is missing",
      });
    }
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    }
    let token = authHeader.split(" ")[1];
    if (!token)
      return res.status(401).json({
        success: false,
        message: "Invalid token",
      });
    const decodedDataFromToken = Jwt.verify(token, secretKey) as AuthUser;
    const user = await prisma.user.findUnique({
      where: {
        id: decodedDataFromToken.id,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User no longer exists",
      });
    }

    req.user = user;
    next();
  },
);
