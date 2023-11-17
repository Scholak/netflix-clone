import { Banner, Slider } from '@/components'
import { api } from '@/lib/api'
import React from 'react'

export const revalidate = 0

const MoviesPage = async () => {
	const popularMovieResponse = await api.get('/movies/popular')
	const sliderMoviesResponse = await api.get('/movies/slider')

	return (
		<div className='bg-neutral-900'>
			<Banner mediaType='movie' />
			<div className='py-4 md:py-6 lg:py-12'>
				<Slider title='Gündemdekiler' link='/popular' items={popularMovieResponse.data.movies} type='movie' />
				{sliderMoviesResponse.data.sliders.map((slider: any) => (
					<Slider key={slider.id} title={slider.title} link={slider.link} items={slider.items} type='movie' />
				))}
			</div>
		</div>
	)
}

export default MoviesPage
