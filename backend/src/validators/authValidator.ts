import { z } from "zod";

const usernameValidator = z
  .string()
  .min(3, "username must at least be 3 characters long")
  .max(50, "Only 50 characters allowed");

const emailValidator = z.email("Invalid email");

const passwordValidator = z
  .string()
  .min(6, "Must at least be 6 characters long");

const roleValidator = z.string();
export const userValidator = z.object({
  username: usernameValidator,
  email: emailValidator,
  password: passwordValidator,
  role: roleValidator.optional(),
});

export const loginValidator = z.object({
  email: emailValidator,
  password: passwordValidator,
});
