// Library Imports
import { getTranslations } from 'next-intl/server'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

// Component Imports
import Text from '@/components/Atoms/Text'

const UserFooter = async () => {
	const t = await getTranslations('Organisms.UserFooter')

	return (
		<footer className='mt-auto bg-neutral-900 px-4 pb-4 md:px-8 md:pb-8 xl:px-16'>
			<div className='mb-4 flex items-center gap-3 text-white text-xl md:gap-6'>
				<FaFacebookF className='cursor-pointer' />
				<FaInstagram className='cursor-pointer' />
				<FaTwitter className='cursor-pointer' />
				<FaYoutube className='cursor-pointer' />
			</div>
			<ul className='mb-2 text-neutral-400 columns-2 md:columns-4'>
				{Array.from({ length: 12 }, (_, i) => i).map((_: any, idx: number) => (
					<li
						key={idx}
						className='mb-2 text-sm hover:underline'
					>
						{t(`link${idx + 1}`)}
					</li>
				))}
			</ul>
			<button className='mb-4 p-2 text-neutral-400 border border-neutral-400'>{t('button')}</button>
			<Text
				size='xs'
				className='text-neutral-400'
			>
				© 1997-{new Date().getFullYear()} Netflix, Inc.
			</Text>
		</footer>
	)
}

export default UserFooter
