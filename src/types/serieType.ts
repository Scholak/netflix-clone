export interface ISerieMedia {
	id: number
	image: string
}

export interface ISerieOverview {
	id: number
	title: string
	image: string
}

export interface ISerieSeason {
	id: number
	date: string
	name: string
	overview: string
	episodeCOunt: string
	poster: string
}
