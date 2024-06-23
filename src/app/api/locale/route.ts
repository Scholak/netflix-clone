// Library Imports
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache'

// Utility Imports
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

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

		cookies().set('language', body.language, { maxAge: 1000 * 60 * 60 * 24 * 90 }) // 3 Months
		revalidatePath('/', 'layout')

		return new Response(JSON.stringify({ message: 'Dil ayarları başarıyla güncellendi!' }), { status: 200 })
	} catch (error: any) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
