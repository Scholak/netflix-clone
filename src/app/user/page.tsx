import { Banner, MovieSlider } from '@/components'
import { api } from '@/lib/api'
import React from 'react'

const UserHomePage = async () => {
	const popularMovieResponse = await api.get('/movies/popular')
	const sliderMoviesResponse = await api.get('/movies/slider')

  return (
		<div className='bg-neutral-900'>
			<Banner mediaType='movie' />
			<MovieSlider title='Gündemdekiler' link='/popular' items={popularMovieResponse.data.movies} />
			{sliderMoviesResponse.data.sliders.map((slider: any) => (
				<MovieSlider key={slider.id} title={slider.title} link={slider.link} items={slider.items} />
			))}
		</div>
	)
}

export default UserHomePage