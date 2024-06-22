// Library Imports
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

// Component Imports
import Text from '@/components/Atoms/Text'
import EditPlanForm from '@/components/Molecules/EditPlanForm'
import SignupStepper from '@/components/Molecules/SignupStepper'

// Asset Imports
import tick from '@/assets/tick.png'

const EditPlanFormPage = async () => {
	const t = await getTranslations('Pages.EditPlanFormPage')

	return (
		<div className='my-4 mx-4 flex flex-col gap-2 text-neutral-800 md:my-8 lg:mx-auto lg:w-2/3'>
			<SignupStepper
				step='2'
				align='left'
			/>
			<Text
				size='3xl'
				weight='bold'
				className='mb-4'
			>
				{t('title')}
			</Text>
			<ul className='flex flex-col'>
				<li className='flex gap-1'>
					<Image
						unoptimized
						src={tick}
						alt='tick'
						className='-translate-y-2 shrink-0'
					/>
					{t('featureOne')}
				</li>
				<li className='flex gap-1'>
					<Image
						unoptimized
						src={tick}
						alt='tick'
						className='-translate-y-2 shrink-0'
					/>
					{t('featureTwo')}
				</li>
				<li className='flex gap-1'>
					<Image
						unoptimized
						src={tick}
						alt='tick'
						className='-translate-y-2 shrink-0'
					/>
					{t('featureThree')}
				</li>
			</ul>
			<EditPlanForm />
		</div>
	)
}

export default EditPlanFormPage
