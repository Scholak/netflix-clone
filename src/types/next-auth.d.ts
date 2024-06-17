import NextAuth, { type DefaultSession, type DefaultUser } from 'next-auth'

declare module 'next-auth' {
	interface User {
		id: number
		email: string
		password: string
		planId: number
		cardNumber: string
		profileId?: number
		language: 'TURKISH' | 'ENGLISH'
	}

	interface Session extends DefaultSession {
		user: User
		expires: DateTime
	}
}
