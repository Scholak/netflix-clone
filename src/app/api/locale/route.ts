import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const session = await auth()

		if (session?.user) {
			await prisma.profile.update({
				where: { id: Number(session?.user.id) },
				data: {
					language: body.language === 'tr' ? 'TURKISH' : 'ENGLISH',
				},
			})
		}

		cookies().set('language', body.language)

		return new Response(JSON.stringify({ message: 'Dil ayarları başarıyla güncellendi!' }), { status: 200 })
	} catch (error: any) {
		console.log({ error })
		return new Response(JSON.stringify({ message: error.message }), { status: 500 })
	}
}
