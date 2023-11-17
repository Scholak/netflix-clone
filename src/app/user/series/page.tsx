import { Banner, Slider } from '@/components'
import { api } from '@/lib/api'
import React from 'react'

export const revalidate = 0

const SeriesPage = async () => {
	const popularSerieResponse = await api.get('/series/popular')
	const sliderSeriesResponse = await api.get('/series/slider')

  return (
		<div className='bg-neutral-900'>
			<Banner mediaType='serie' />
			<div className='py-4 md:py-6 lg:py-12'>
				<Slider title='Gündemdekiler' link='/popular' items={popularSerieResponse.data.series} />
				{sliderSeriesResponse.data.sliders.map((slider: any) => {
					if (slider.items.length) {
						return <Slider key={slider.id} title={slider.title} link={slider.link} items={slider.items} />
					}
				})}
			</div>
		</div>
	)
}

export default SeriesPage