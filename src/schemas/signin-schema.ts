import { z } from 'zod';

export const makeSigninFormSchema = () =>
  z.object({
    email: z
      .email("Invalid email address")
      .nonempty("Email is required"),
    password: z.string()
      .nonempty("Password is required"),
  });

export type SigninFormType = z.infer<ReturnType<typeof makeSigninFormSchema>>;