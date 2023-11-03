import { NextRequest } from 'next/server'
import bcrypt from 'bcrypt'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const signedupUser = await prisma.user.create({
		data: {
			email: body.email,
			password: await bcrypt.hash(body.password, 10),
			planId: body.planId,
			cardNumber: body.cardNumber,
		},
	})

  return new Response(JSON.stringify(signedupUser))
}