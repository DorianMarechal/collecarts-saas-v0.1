import { createAuthClient } from "better-auth/client";
import { emailOTPClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [
    emailOTPClient()
  ]
});

export const { signIn, signUp, signOut, useSession } = authClient;
