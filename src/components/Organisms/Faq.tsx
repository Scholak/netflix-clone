'use client'

// Library Imports
import { useState } from 'react'
import { useTranslations } from 'next-intl'

// Component Imports
import Text from '@/components/Atoms/Text'
import Question from '@/components/Molecules/Question'

const Faq = () => {
	const t = useTranslations('Organisms.Faq')
	const [index, setIndex] = useState<number>(0)

	return (
		<div className='text-white bg-black py-6 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>
			<Text
				weight='bold'
				align='center'
				size='5xl'
				className='mb-6'
			>
				{t('title')}
			</Text>
			<div className='grid gap-3 text-xl font-medium'>
				{['One', 'Two', 'Three', 'Four', 'Five', 'Six'].map((number: string, idx: number) => (
					<Question
						key={idx}
						isActive={idx === index}
						onClick={() => setIndex(idx)}
						question={t(`question${number}`)}
						answer={t(`question${number}Answer`)}
					/>
				))}
			</div>
		</div>
	)
}

export default Faq
