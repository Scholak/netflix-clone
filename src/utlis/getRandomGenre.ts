import { genres } from "@/data/genreList"
import { IGenre } from "@/types/genreType"

export const getRandomGenres = () => {
  const randomGenres: IGenre[] = []

  while (randomGenres.length < 7) {
		const index = Math.floor(Math.random() * genres.length)
		const element = genres[index]

		if (!randomGenres.includes(element)) {
			randomGenres.push(element)
		}
	}

  return randomGenres
}