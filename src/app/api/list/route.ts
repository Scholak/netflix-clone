import { authOptions } from '@/lib/authOptions'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)
  const body = await request.json()

  if (!session?.user.profileId) {
    return new Response(JSON.stringify({ message: 'Profil mevcut değil' }), { status: 400 })
  }

  try {
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