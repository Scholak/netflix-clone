import { NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
	const body = await request.json()

	const signedupUser = await prisma.user.create({
		data: {
			email: body.email.toLowerCase(),
			password: await bcrypt.hash(body.password, 10),
			planId: body.planId,
			cardNumber: body.cardNumber,
		},
	})

	if (signedupUser) {
		return new Response(JSON.stringify({ success: true }))
	}

	return new Response(JSON.stringify({ success: false }))
}
