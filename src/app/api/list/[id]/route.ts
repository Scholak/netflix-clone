// Utility Imports
import { prisma } from '@/lib/prisma'
import { tmdbApi } from '@/lib/tmdbApi'

interface IParams {
	params: {
		id: string
	}
}

export async function GET(_: never, { params }: IParams) {
	try {
		const data = await prisma.list.findMany({
			where: {
				profileId: Number(params.id),
			},
		})

		const lists = await Promise.all(
			data.map(async (list: any) => {
				if (list.mediaType === 'movie') {
					const response = await tmdbApi.get(`/movie/${list.mediaId}`)

					return {
						id: response.data.id,
						type: 'movie',
						image: `${process.env.TMDB_IMAGE_PATH}/original${response.data.backdrop_path}`,
					}
				} else {
					const response = await tmdbApi.get(`/tv/${list.mediaId}`)

					return {
						id: response.data.id,
						type: 'serie',
						image: `${process.env.TMDB_IMAGE_PATH}/original${response.data.backdrop_path}`,
					}
				}
			}),
		)

		return new Response(JSON.stringify({ lists }))
	} catch (error) {
		return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 })
	}
}
