import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid e-mail" }).trim(),
    displayName: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(30, { message: "Name is too long" })
      .trim(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match",
    path: ["confirmPassword"],
  });

export type FormState =
  | {
      errors?: {
        displayName: string[];
        email?: string[];
        password?: string[];
      };
      message?: string[];
    }
  | undefined;
