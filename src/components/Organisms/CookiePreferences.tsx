'use client'

// Library Imports
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

// Component Imports
import Text from '@/components/Atoms/Text'
import Button from '@/components/Atoms/Button'

const CookiePreferences = () => {
	const t = useTranslations('Organisms.CookiePreferences')

	const [isActive, setIsActive] = useState<boolean>(true)

	return (
		<>
			{isActive && (
				<div className='fixed top-0 left-0 right-0 py-2 px-4 bg-white z-10'>
					<div className='mb-4 flex justify-between text-neutral-600'>
						{/* Desktop View */}
						<Text className='hidden md:block'>
							{t.rich('descriptionLong', {
								underline: chunks => (
									<Text
										element='span'
										weight='medium'
										className='underline'
									>
										{chunks}
									</Text>
								),
							})}
						</Text>
						{/* Mobile View */}
						<Text className='md:hidden block'>
							{t.rich('descriptionShort', {
								underline: chunks => (
									<Text
										element='span'
										weight='medium'
										className='underline'
									>
										{chunks}
									</Text>
								),
							})}
						</Text>
						<FaTimes
							className='translate-y-1 text-lg shrink-0 cursor-pointer'
							onClick={() => setIsActive(false)}
						/>
					</div>
					<div className='flex flex-col gap-2 md:flex-row md:items-center mg:gap-4'>
						<Button
							size='sm'
							onClick={() => setIsActive(false)}
						>
							{t('accept')}
						</Button>
						<Button
							size='sm'
							onClick={() => setIsActive(false)}
						>
							{t('decline')}
						</Button>
						<Button
							size='sm'
							onClick={() => setIsActive(false)}
							outlined
						>
							{t('customizePreferences')}
						</Button>
					</div>
				</div>
			)}
		</>
	)
}

export default CookiePreferences
