import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
	const session = await auth()

	if (!session) {
		return new Response('', { status: 403 })
	}

	const profiles = await prisma.profile.findMany({
		where: {
			userId: Number(session.user.id),
		},
	})

	return new Response(JSON.stringify({ profiles }))
}

export async function POST(request: NextRequest) {
	const session = await auth()

	if (!session) {
		return new Response('', { status: 403 })
	}

	const body = await request.json()

	try {
		const newProfile = await prisma.profile.create({
			data: {
				name: body.name,
				userId: Number(session.user.id),
				avatar: String(Math.ceil(Math.random() * 5)),
			},
		})

		if (newProfile) {
			return new Response(JSON.stringify({ newProfile }), { status: 201 })
		} else {
			return new Response(JSON.stringify({ message: 'Yeni profil oluşturulurken hala oluştu.' }), { status: 400 })
		}
	} catch (error: any) {
		return new Response(JSON.stringify({ message: 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.' }), {
			status: 500,
		})
	}
}
