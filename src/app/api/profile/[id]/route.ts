// Library Imports
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

// Utility Imports
import { prisma } from '@/lib/prisma'

type Params = {
	params: {
		id: number
	}
}

export async function GET(_: never, { params }: Params) {
	try {
		const profile = await prisma.profile.findUnique({
			where: {
				id: Number(params.id),
			},
		})

		return new Response(JSON.stringify({ profile }))
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}

export async function PUT(request: NextRequest, { params }: Params) {
	try {
		const body = await request.json()

		const updatedProfile = await prisma.profile.update({
			where: {
				id: Number(params.id),
			},
			data: {
				name: body.name,
				language: body.language === 'tr' ? 'TURKISH' : 'ENGLISH',
			},
		})

		if (updatedProfile) {
			cookies().set('language', body.language)
			return new Response(JSON.stringify({ message: 'Profil başarıyla güncellendi.' }), { status: 203 })
		} else {
			return new Response(JSON.stringify({ message: 'Profil güncellenirken hata oluştu.' }), { status: 400 })
		}
	} catch (error: any) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}

export async function DELETE(_: never, { params }: Params) {
	try {
		await prisma.profile.delete({
			where: {
				id: Number(params.id),
			},
		})

		return new Response(null, { status: 204 })
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
