import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.NEXTAUTH_CLIENT_ID!,
      clientSecret: process.env.NEXTAUTH_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
