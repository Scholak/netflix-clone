import { Slider, TopTenSlider } from '@/components'
import { api } from '@/lib/api'
import React from 'react'

export const revalidate = 0

const LatestPage = async () => {
  const upcomingMoviePromise = await api.get('/movies/upcoming')
  const nowPayingMoviePromise = await api.get('/movies/now-playing')
  const upcomingSeriePromise = await api.get('/series/upcoming')
  const nowPayingSeriePromise = await api.get('/series/now-playing')
  const topTenMoviePromise = await api.get('/movies/top-ten')
  const topTenSeriePromise = await api.get('/series/top-ten')

	const promises = [
		upcomingMoviePromise,
		nowPayingMoviePromise,
		upcomingSeriePromise,
		nowPayingSeriePromise,
		topTenMoviePromise,
		topTenSeriePromise,
	]

	const [
		upcomingMovieResponse,
		nowPayingMovieResponse,
		upcomingSerieResponse,
		nowPayingSerieResponse,
		topTenMovieResponse,
		topTenSerieResponse,
	] = await Promise.all(promises)

  return (
		<div className='pt-20  bg-neutral-900'>
			<Slider title='Beklemeye Değer Filmler' link='/' items={upcomingMovieResponse.data.movies} type='movie' />
			<Slider title='Beklemeye Değer Diziler' link='/' items={upcomingSerieResponse.data.series} type='serie' />
			<Slider title='Bu Hafta Yayınlanan Filmler' link='/' items={nowPayingMovieResponse.data.movies} type='movie' />
			<Slider title='Bu Hafta Yayınlanan Diziler' link='/' items={nowPayingSerieResponse.data.series} type='serie' />
			<TopTenSlider
				title='Türkiye de Bugünün Top 10 Film Listesi'
				items={topTenMovieResponse.data.movies}
				type='movie'
			/>
			<TopTenSlider
				title='Türkiye de Bugünün Top 10 Dizi Listesi'
				items={topTenSerieResponse.data.series}
				type='serie'
			/>
		</div>
	)
}

export default LatestPage