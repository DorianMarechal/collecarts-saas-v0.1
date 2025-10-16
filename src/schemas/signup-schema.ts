import { z } from 'zod';
import { NAME_RE } from '@/utils/regex';

export const makeSignupFormSchema = () =>
  z.object({
    name: z
      .string()
      .nonempty("Full name is required")
      .min(2, "Full name must be at least 2 characters long")
      .max(30, "Full name must be at most 30 characters long")
      .regex(
        NAME_RE,
        "Please enter your full name (e.g., John Doe)",
      ),
    email: z
      .email("Invalid email address")
      .nonempty("Email is required"),
    password: z
      .string()
      .min(12, "Password must be at least 12 characters")
      .max(68, "Password must be at most 68 characters")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(/[\W_]/, "Password must contain at least one special character"),
    confirmPassword: z
      .string()
      .nonempty("Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords do not match",
  });

export type SignupFormType = z.infer<ReturnType<typeof makeSignupFormSchema>>;