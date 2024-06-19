// Library Imports
import Skeleton from 'react-loading-skeleton'

const ProfileLoader = () => {
	return (
		<div className='flex flex-wrap justify-center gap-8'>
			<div className='flex flex-col gap-4'>
				<Skeleton
					width='192px'
					height='192px'
				/>
				<Skeleton
					width='192px'
					height='24px'
				/>
			</div>
			<div className='flex flex-col gap-4'>
				<Skeleton
					width='192px'
					height='192px'
				/>
				<Skeleton
					width='192px'
					height='24px'
				/>
			</div>
			<div className='flex flex-col gap-4'>
				<Skeleton
					width='192px'
					height='192px'
				/>
				<Skeleton
					width='192px'
					height='24px'
				/>
			</div>
		</div>
	)
}

export default ProfileLoader
