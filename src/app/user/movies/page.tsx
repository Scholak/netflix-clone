// Libraru Imports
import { headers } from 'next/headers'
import { getTranslations } from 'next-intl/server'

// Type Imports
import { ISlider } from '@/types/sliderTypes'

// Component Imports
import Banner from '@/components/Organisms/Banner'
import Slider from '@/components/Organisms/Slider'

// Utility Imports
import { api } from '@/lib/api'

export const revalidate = 0

const MoviesPage = async () => {
	const t = await getTranslations('Pages.MoviesPage')

	const popularMoviePromise = api.get('/movies/popular', { headers: { Cookie: headers().get('cookie') } })
	const sliderMoviesPromise = api.get('/movies/slider', { headers: { Cookie: headers().get('cookie') } })

	const promises = [popularMoviePromise, sliderMoviesPromise]

	const [popularMovieResponse, sliderMoviesResponse] = await Promise.all(promises)

	return (
		<div className='bg-neutral-900'>
			<Banner mediaType='movie' />
			<div className='py-4 md:py-6 lg:py-12'>
				<Slider
					title={t('live')}
					link='/popular'
					items={popularMovieResponse.data.movies}
					type='movie'
				/>
				{sliderMoviesResponse.data.sliders.map((slider: ISlider) => (
					<Slider
						key={slider.id}
						title={slider.title}
						link={slider.link}
						items={slider.items}
						type='movie'
					/>
				))}
			</div>
		</div>
	)
}

export default MoviesPage
