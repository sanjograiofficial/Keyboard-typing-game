import type { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(500).json({
    message: "Something went wrong",
    error: err.message,
  });
};
