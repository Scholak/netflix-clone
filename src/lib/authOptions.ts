import { AuthOptions } from 'next-auth'
import { prisma } from './prisma'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			// @ts-ignore
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials.password) {
					return null
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				})

				if (!user) {
					throw new Error('Kullanıcı bulunamadı.')
				}

				const check = await bcrypt.compare(credentials.password, user.password)

				if (!check) {
					throw new Error('Parola yanlış. Lütfen yeniden deneyin ya da parolanızı sıfırlayın.')
				}

				return user
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async jwt({ token, trigger, session, user }) {
			if (trigger === 'update' && session?.profileId) {
				token.profileId = session.profileId
			}
			return { ...token, ...user }
		},
		async session({ session, token }) {
			session.user = token as any
			return session
		},
	},
}