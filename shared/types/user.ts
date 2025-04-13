import { z } from "zod";
const signupSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  pseudo: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be less than 30 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    ),
});

export const registerSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    userName: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username must be less than 30 characters"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[!@#$%^&*]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
    accountId: z.string().or(z.undefined()),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type TRegister = z.infer<typeof registerSchema>;
export type TFormStateError = {
  email?: string[];
  password?: string[];
  userName?: string[];
  confirmPassword?: string[];
};

export const signInSchema = signupSchema.pick({ email: true, password: true });

export type TSignup = z.infer<typeof signupSchema>;
