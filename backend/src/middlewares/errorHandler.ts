import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Prisma } from "../generated/prisma/client.js";
import zod from "zod";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        return res.status(409).json({
          message: "A record with this value already exists",
        });
      case "P2025":
        return res.status(404).json({
          message: "Record not found",
        });
    }
  }
  if (err instanceof jwt.TokenExpiredError) {
    return res.status(401).json({
      success: false,
      message: "Token expired",
    });
  }
  if (err instanceof zod.ZodError) {
    const errors = err.issues.map((e) => {
      return {
        field: e.path[0],
        message: e.message,
      };
    });
    return res.status(400).json({
      message: "Validation failed",
      errors,
    });
  }
  if (err instanceof jwt.JsonWebTokenError) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
  return res.status(500).json({
    message: "Something went wrong",
  });
};
