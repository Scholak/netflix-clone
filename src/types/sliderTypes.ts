import { IMovieOverview } from "./movieType"
import { ISerieOverview } from "./serieType"

export interface ISlider {
	id: number
	title: string
	link: string
	items: IMovieOverview[] | ISerieOverview[]
}