import { Banner, MovieSlider } from '@/components'
import { api } from '@/lib/api'
import React from 'react'

export const revalidate = 0

const UserHomePage = async () => {
	const popularMovieResponse = await api.get('/movies/popular')
	const sliderMoviesResponse = await api.get('/movies/slider')

  return (
		<div className='bg-neutral-900'>
			<Banner mediaType='movie' />
			<div className='py-4 md:py-6 lg:py-12'>
				<MovieSlider title='Gündemdekiler' link='/popular' items={popularMovieResponse.data.movies} />
				{sliderMoviesResponse.data.sliders.map((slider: any) => (
					<MovieSlider key={slider.id} title={slider.title} link={slider.link} items={slider.items} />
				))}
			</div>
		</div>
	)
}

export default UserHomePage