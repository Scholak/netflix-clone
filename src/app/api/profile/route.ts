import { authOptions } from '@/lib/authOptions'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return new Response('', { status: 403 })
  }

  const body = await request.json()

  try {
    const newProfile = await prisma.profile.create({
      data: {
        name: body.name,
        userId: session.user.id
      }
    })

    if (newProfile) {
			return new Response(JSON.stringify({ newProfile }), { status: 201 })
		} else {
      return new Response(JSON.stringify({ message: 'Yeni profil oluşturulurken hala oluştu.' }), { status: 400 })
    }
  } catch (error: any) {
    console.log(error)
    return new Response(JSON.stringify({ message: 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.' }), { status: 500 })
  }
}