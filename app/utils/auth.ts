import GitHubProvider from 'next-auth/providers/github'
import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/app/utils/db'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET_ID as string,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user?.id
      return session
    },
  },
}
