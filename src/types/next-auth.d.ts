import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: {
			id: number
			email: string
			password: string
			planId: number
			cardNumber: string
		} & DefaultSession['user']
	}
}
