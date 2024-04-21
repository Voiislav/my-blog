import { z } from "zod";

export const signUpSchema = z.object({
    email: z.string().email(),
    displayName: z.string(),
    password: z
      .string()
      .min(8, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
})