// Library Imports
import { NextRequest } from 'next/server'

// Utility Imports
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()

		const existingUser = await prisma.user.findUnique({
			where: {
				email: body.email.toLowerCase(),
			},
		})

		return new Response(JSON.stringify({ userExists: !!existingUser }))
	} catch (error: any) {
		return new Response(JSON.stringify({ message: 'Internal Server Error!' }), { status: 500 })
	}
}
