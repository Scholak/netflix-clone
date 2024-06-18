// Library Imports
import Image, { StaticImageData } from 'next/image'

// Component Imports
import Text from '@/components/Atoms/Text'
import Divider from '@/components/Atoms/Divider'

type IFeatureProps = {
	/** Feature image */
	image: StaticImageData
	/** Feature title */
	title: string
	/** Feature description */
	description: string
	/** Feature layout */
	reversed?: boolean
}

const Feature = ({ image, title, description, reversed = false }: IFeatureProps) => {
	const reversedClasss = reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'

	return (
		<>
			<div
				className={`h-96 my-20 flex flex-col gap-6 ${reversedClasss} lg:gap-0 lg:items-center px-2 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-60`}
			>
				<div className='w-full text-center lg:w-1/2 lg:text-left'>
					<Text
						element='h3'
						size='2xl'
						weight='bold'
						align='center'
						className='mb-6 sm:text-5xl sm:text-left'
					>
						{title}
					</Text>
					<Text
						size='lg'
						weight='medium'
						align='center'
						className='leading-6 sm:text-2xl sm:text-left'
					>
						{description}
					</Text>
				</div>
				<div className='relative w-full h-full lg:w-1/2'>
					<Image
						unoptimized
						src={image}
						alt='tv image'
						fill
						className='object-contain'
					/>
				</div>
			</div>
			<Divider />
		</>
	)
}

export default Feature
