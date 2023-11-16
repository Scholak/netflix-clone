import { Banner, MovieSlider } from '@/components'
import { api } from '@/lib/api'
import React from 'react'

const UserHomePage = async () => {
	const popularMovieResponse = await api.get('/movies/popular')

  return (
		<div className='bg-neutral-900'>
			<Banner mediaType='movie' />
			<MovieSlider title='Gündemdekiler' link='/popular' items={popularMovieResponse.data.movies} />
		</div>
	)
}

export default UserHomePage