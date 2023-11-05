import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'

interface Params {
	params: {
		id: number
	}
}

export async function GET(request: NextRequest, { params }: Params) {
  const profile = await prisma.profile.findUnique({
    where: {
      id: Number(params.id)
    }
  })

  return new Response(JSON.stringify({ profile }))
}

export async function PUT(request: NextRequest, { params }: Params) {
	const body = await request.json()

	try {
		const updatedProfile = await prisma.profile.update({
			where: {
				id: Number(params.id),
			},
			data: {
				name: body.name,
			},
		})

		if (updatedProfile) {
			return new Response(JSON.stringify({ message: 'Profil başarıyla güncellendi.' }), { status: 203 })
		} else {
			return new Response(JSON.stringify({ message: 'Profil güncellenirken hata oluştu.' }), { status: 400 })
		}
	} catch (error: any) {
		return new Response(JSON.stringify({ message: 'Sunucu hatası. Data sonra tekrar deneyin.' }), { status: 500 })
	}
}