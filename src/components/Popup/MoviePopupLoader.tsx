import React from 'react'
import Skeleton from 'react-loading-skeleton'

const MoviePopupLoader = () => {
  return (
		<div className='fixed left-1/2 top-6 bottom-0 overflow-y-auto -translate-x-1/2 w-11/12 rounded-md bg-neutral-900 text-white z-30 md:w-3/4 lg:w-2/3'>
			<Skeleton height='512px' />
			<div className='flex justify-between p-3'>
				<div className='w-1/2'>
					<Skeleton height='20px' className='mb-12' />
					<Skeleton height='24px' className='mb-4' />
					<Skeleton height='196px' />
				</div>
				<div className='w-1/3'>
					<Skeleton height='48px' className='mb-4' />
					<Skeleton height='48px' />
				</div>
			</div>
		</div>
	)
}

export default MoviePopupLoader