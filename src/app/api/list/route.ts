// Library Imports
import { NextRequest } from 'next/server'

// Utility Imports
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
	try {
		const session = await auth()
		const body = await request.json()

		if (!session?.user.profileId) {
			return new Response(JSON.stringify({ message: 'Profil mevcut değil' }), { status: 400 })
		}

		const addToList = await prisma.list.create({
			data: {
				...body,
				profileId: session?.user.profileId,
			},
		})

		if (addToList) {
			return new Response(JSON.stringify({ message: 'Listeye ekleme işlemi başarılı' }), { status: 201 })
		}
		return new Response(JSON.stringify({ message: 'Listeye ekleme işlemi başarısız oldu' }), { status: 422 })
	} catch (error: any) {
		return new Response(JSON.stringify({ message: error.message }), { status: 500 })
	}
}

export async function DELETE(request: NextRequest) {
	try {
		const session = await auth()
		const body = await request.json()

		if (!session?.user.profileId) {
			return new Response(JSON.stringify({ message: 'Profil mevcut değil' }), { status: 400 })
		}

		const removeFromList = await prisma.list.deleteMany({
			where: {
				profileId: session.user.profileId,
				mediaId: body.mediaId,
				mediaType: body.mediaType,
			},
		})

		if (removeFromList) {
			return new Response(JSON.stringify({ message: 'Listeden silme işlemi başarılı' }), { status: 200 })
		}
		return new Response(JSON.stringify({ message: 'Listeden silme işlemi başarısız oldu' }), { status: 422 })
	} catch (error: any) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
