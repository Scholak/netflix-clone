import { api } from "@/lib/api";

export const addToList = async ({ mediaId, mediaType }: { mediaId: number; mediaType: 'movie' | 'serie' }) => {
	const response = await api.post('/list', { mediaId, mediaType })
	return response.data.message
}
