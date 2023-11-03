import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
	const body = await request.json()

	const existingUser = await prisma.user.findUnique({
		where: {
			email: body.email.toLowerCase(),
		},
	})

  return new Response(JSON.stringify({ userExists: !!existingUser }))
}
