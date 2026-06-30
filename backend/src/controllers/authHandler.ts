import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { loginValidator, userValidator } from "../validators/authValidator.js";
import prisma from "../db/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const secretKey = process.env.SECRET_KEY;
if (!secretKey) throw new Error("Secret key is required");

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    userValidator.parse(req.body);
    const { username, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        role: role,
      },
      select: {
        username: true,
        email: true,
        role: true,
      },
    });
    res.status(201).json({
      message: "User registered",
      data: user,
    });
  },
);
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  loginValidator.parse(req.body);
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    secretKey,
    { expiresIn: "1d" },
  );
  res.status(200).json({
    message: "Login successful",
    token: token,
  });
});
