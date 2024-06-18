'use client'

// Library Imports
import { useState } from 'react'

// Type Imports
import { IFaq } from '@/types/faqType'

// Component Imports
import Question from '@/components/Molecules/Question'
import Text from '@/components/Atoms/Text'

// Asset Imports
import { faqData } from '@/data/faq'

const Faq = () => {
	const [index, setIndex] = useState<number>(0)

	return (
		<div className='text-white bg-black py-6 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>
			<Text
				weight='bold'
				align='center'
				size='5xl'
				className='mb-6'
			>
				Sıkça Sorulan Sorular
			</Text>
			<div className='grid gap-3 text-xl font-medium'>
				{faqData.map((faq: IFaq, idx: number) => (
					<Question
						key={faq.id}
						isActive={idx === index}
						onClick={() => setIndex(idx)}
						question={faq.question}
						answer={faq.answer}
					/>
				))}
			</div>
		</div>
	)
}

export default Faq
