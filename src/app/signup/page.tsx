// Library Imports
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

// Component Imports
import Text from '@/components/Atoms/Text'
import Button from '@/components/Atoms/Button'
import SignupStepper from '@/components/Molecules/SignupStepper'

// Asset Imports
import tick from '@/assets/tick.png'
import tickOutlined from '@/assets/tickOutlined.png'

const SelectPlanPage = async () => {
	const t = await getTranslations('Pages.SignupPage')

	return (
		<div className='my-12 mx-4 flex flex-col items-center gap-2 text-neutral-800 sm:my-20 sm:w-72 sm:mx-auto md:my-32 lg:my-40 lg:w-72'>
			<Image
				unoptimized
				src={tickOutlined}
				alt='tick outlined'
				className='mb-4'
			/>
			<SignupStepper step='2' />
			<Text
				align='center'
				size='3xl'
				weight='bold'
				className='mb-4'
			>
				{t('title')}
			</Text>
			<ul className='flex flex-col gap-4'>
				<li className='flex gap-1'>
					<Image
						unoptimized
						src={tick}
						alt='tick'
						className='-translate-y-2 shrink-0'
					/>
					{t('itemOne')}
				</li>
				<li className='flex gap-1'>
					<Image
						unoptimized
						src={tick}
						alt='tick'
						className='-translate-y-2 shrink-0'
					/>
					{t('itemTwo')}
				</li>
				<li className='flex gap-1'>
					<Image
						unoptimized
						src={tick}
						alt='tick'
						className='-translate-y-2 shrink-0'
					/>
					{t('itemThree')}
				</li>
			</ul>
			<Button
				variant='link'
				href='/signup/planform'
				size='lg'
			>
				{t('next')}
			</Button>
		</div>
	)
}

export default SelectPlanPage
