// Library Imports
import { FaPlusCircle } from 'react-icons/fa'
import Link from 'next/link'

// Component Imports
import Text from '@/components/Atoms/Text'

const AddProfileCard = () => {
	return (
		<Link
			href='/create-profile'
			className='group flex flex-col gap-4 items-center hover:cursor-pointer'
		>
			<div className='w-48 h-48 flex items-center justify-center rounded border-red group-hover:border-white group-hover:bg-neutral-100'>
				<FaPlusCircle className='text-8xl text-neutral-400' />
			</div>
			<Text
				size='2xl'
				className='text-neutral-400 group-hover:text-white'
			>
				Profil Ekle
			</Text>
		</Link>
	)
}

export default AddProfileCard
