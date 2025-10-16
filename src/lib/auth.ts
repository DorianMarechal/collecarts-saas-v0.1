import { betterAuth, User } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { emailOTP } from "better-auth/plugins"

const prisma = new PrismaClient();

type sendEmailParams = {
  user: User;
  url: string;
  token: string;
};

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    resetPasswordTokenExpirationMinutes: 60,
    sendResetPassword: async ({ user, url, token }: sendEmailParams) => {
      const res = await fetch(`${process.env.BETTER_AUTH_URL}/api/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
          from: "CollecArts <onboarding@resend.dev>",
          to: user.email,
          subject: "Reset your password",
          template: "resetPassword",
          variables: {
            userFirstname: user.name.split(" ")[0] || user.email,
            resetPasswordLink: url + `?token=${token}`,
          },
        }),
      });

      if (!res.ok) console.log(await res.json().catch(() => ({})));
    },
    onPasswordReset: async ({ user }, request) => {
      // your logic here
      console.log(`Password for user ${user.email} has been reset.`);
    },
  },
  socialProviders: {
    apple: {
      clientId: process.env.APPLE_CLIENT_ID as string,
      clientSecret: process.env.APPLE_CLIENT_SECRET as string,
    },
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }, 
  },
  // Add appleid.apple.com to trustedOrigins for Sign In with Apple flows
  trustedOrigins: ["https://appleid.apple.com"], 
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "sign-in") {
          // Send the OTP for sign in
        } else if (type === "email-verification") {

          console.log("Sending verification OTP to:", email, "OTP:", otp);
          const res = await fetch(`${process.env.BETTER_AUTH_URL}/api/send`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
            body: JSON.stringify({
              from: "CollecArts <onboarding@resend.dev>",
              to: email,
              subject: "Verify your email address",
              template: "verifyMail",
              variables: {
                validationCode: otp,
              },
            }),
          });

          if (!res.ok) console.log(await res.json().catch(() => ({})));
        } else {
          // Send the OTP for password reset
        }
      },
    })
  ]
});