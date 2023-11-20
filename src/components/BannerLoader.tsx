import React from 'react'
import Skeleton from 'react-loading-skeleton'

const BannerLoader = () => {
  return (
		<div className='relative w-full h-[90vh] flex items-end'>
			<div className='px-4 w-full text-white z-[9] -translate-y-8 md:px-8 lg:w-1/2 xl:px-16'>
				<Skeleton height='48px' className='mb-4' />
				<Skeleton height='128px' className='mb-8' />
				<div className='grid gap-2 md:grid-cols-2 md:gap-4'>
						<Skeleton height='48px' />
						<Skeleton height='48px' />
				</div>
			</div>
			<Skeleton width='100%' height='90vh' />
		</div>
	)
}

export default BannerLoader