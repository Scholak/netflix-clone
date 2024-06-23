// Library Imports
import { headers } from 'next/headers'
import { getTranslations } from 'next-intl/server'

// Component Imports
import Slider from '@/components/Organisms/Slider'
import TopTenSlider from '@/components/Organisms/TopTenSlider'

// Utility Imports
import { api } from '@/lib/api'

export const revalidate = 0

const LatestPage = async () => {
	const t = await getTranslations('Pages.LatestPage')

	const upcomingMoviePromise = api.get('/movies/upcoming', { headers: { Cookie: headers().get('cookie') } })
	const nowPayingMoviePromise = api.get('/movies/now-playing', { headers: { Cookie: headers().get('cookie') } })
	const upcomingSeriePromise = api.get('/series/upcoming', { headers: { Cookie: headers().get('cookie') } })
	const nowPayingSeriePromise = api.get('/series/now-playing', { headers: { Cookie: headers().get('cookie') } })
	const topTenMoviePromise = api.get('/movies/top-ten', { headers: { Cookie: headers().get('cookie') } })
	const topTenSeriePromise = api.get('/series/top-ten', { headers: { Cookie: headers().get('cookie') } })

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
				title={t('upcomingMovies')}
				link='/'
				items={upcomingMovieResponse.data.movies}
				type='movie'
			/>
			<Slider
				title={t('upcomingSeries')}
				link='/'
				items={upcomingSerieResponse.data.series}
				type='serie'
			/>
			<Slider
				title={t('moviesReleasedThisWeek')}
				link='/'
				items={nowPayingMovieResponse.data.movies}
				type='movie'
			/>
			<Slider
				title={t('moviesReleasedThisWeek')}
				link='/'
				items={nowPayingSerieResponse.data.series}
				type='serie'
			/>
			<TopTenSlider
				title={t('topTenMovies')}
				items={topTenMovieResponse.data.movies}
				type='movie'
			/>
			<TopTenSlider
				title={t('topTenSeries')}
				items={topTenSerieResponse.data.series}
				type='serie'
			/>
		</div>
	)
}

export default LatestPage
