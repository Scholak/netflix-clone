// Library Imports
import Image from 'next/image'

// Component Imports
import Text from '@/components/Atoms/Text'
import EditPlanForm from '@/components/Molecules/EditPlanForm'
import SignupStepper from '@/components/Molecules/SignupStepper'

// Asset Imports
import tick from '@/assets/tick.png'

const EditPlanFormPage = () => {
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
				Kendinize uygun bir plan seçin
			</Text>
			<ul className='flex flex-col'>
				<li className='flex gap-1'>
					<Image
						unoptimized
						src={tick}
						alt='tick'
						className='-translate-y-2 shrink-0'
					/>
					Binlerce seçenek, sınırsız eğlence. Reklamsız.
				</li>
				<li className='flex gap-1'>
					<Image
						unoptimized
						src={tick}
						alt='tick'
						className='-translate-y-2 shrink-0'
					/>
					Sadece sizin için önerilen içerikler.
				</li>
				<li className='flex gap-1'>
					<Image
						unoptimized
						src={tick}
						alt='tick'
						className='-translate-y-2 shrink-0'
					/>
					Planınızı istediğiniz zaman değiştirebilir ya da iptal edebilirsiniz.
				</li>
			</ul>
			<EditPlanForm />
		</div>
	)
}

export default EditPlanFormPage
