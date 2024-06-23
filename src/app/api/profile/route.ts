// Library Imports
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

// Utility Imports
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(_: never) {
	try {
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
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}

export async function POST(request: NextRequest) {
	try {
		const session = await auth()

		if (!session) {
			return new Response('', { status: 403 })
		}

		const body = await request.json()

		const newProfile = await prisma.profile.create({
			data: {
				name: body.name,
				userId: Number(session.user.id),
				language: body.language === 'tr' ? 'TURKISH' : 'ENGLISH',
				avatar: String(Math.ceil(Math.random() * 5)),
			},
		})

		if (newProfile) {
			cookies().set('language', body.language)
			return new Response(JSON.stringify({ newProfile }), { status: 201 })
		} else {
			return new Response(JSON.stringify({ message: 'Yeni profil oluşturulurken hala oluştu.' }), { status: 400 })
		}
	} catch (error: any) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
