import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  database: process.env.DATABASE_URL,
  session: {
    jwt: true
  },
  pages: {
    signIn: "/signin"
  },
  callbacks: {
    async signIn(user, account, profile) {
      return true;
    }
  }
});
