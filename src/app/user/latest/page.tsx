// Component Imports
import Slider from '@/components/Organisms/Slider'
import TopTenSlider from '@/components/Organisms/TopTenSlider'

// Utility Imports
import { api } from '@/lib/api'

export const revalidate = 0

const LatestPage = async () => {
	const upcomingMoviePromise = api.get('/movies/upcoming')
	const nowPayingMoviePromise = api.get('/movies/now-playing')
	const upcomingSeriePromise = api.get('/series/upcoming')
	const nowPayingSeriePromise = api.get('/series/now-playing')
	const topTenMoviePromise = api.get('/movies/top-ten')
	const topTenSeriePromise = api.get('/series/top-ten')

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
			<Slider
				title='Beklemeye Değer Filmler'
				link='/'
				items={upcomingMovieResponse.data.movies}
				type='movie'
			/>
			<Slider
				title='Beklemeye Değer Diziler'
				link='/'
				items={upcomingSerieResponse.data.series}
				type='serie'
			/>
			<Slider
				title='Bu Hafta Yayınlanan Filmler'
				link='/'
				items={nowPayingMovieResponse.data.movies}
				type='movie'
			/>
			<Slider
				title='Bu Hafta Yayınlanan Diziler'
				link='/'
				items={nowPayingSerieResponse.data.series}
				type='serie'
			/>
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
