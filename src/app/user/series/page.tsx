// Type Imports
import { ISlider } from '@/types/sliderTypes'

// Component Imports
import Banner from '@/components/Organisms/Banner'
import Slider from '@/components/Organisms/Slider'

// Utility Imports
import { api } from '@/lib/api'

export const revalidate = 0

const SeriesPage = async () => {
	const popularSeriePromise = api.get('/series/popular')
	const sliderSeresPromise = api.get('/series/slider')

	const promises = [popularSeriePromise, sliderSeresPromise]

	const [popularSerieResponse, sliderSeriesResponse] = await Promise.all(promises)

	return (
		<div className='bg-neutral-900'>
			<Banner mediaType='serie' />
			<div className='py-4 md:py-6 lg:py-12'>
				<Slider
					title='Gündemdekiler'
					link='/popular'
					items={popularSerieResponse.data.series}
					type='serie'
				/>
				{sliderSeriesResponse.data.sliders.map((slider: ISlider) => {
					if (slider.items.length) {
						return (
							<Slider
								key={slider.id}
								title={slider.title}
								link={slider.link}
								items={slider.items}
								type='serie'
							/>
						)
					}
				})}
			</div>
		</div>
	)
}

export default SeriesPage
