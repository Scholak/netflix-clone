'use client'

import React, { useState } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { faqData } from '@/data/faq'
import { IFaq } from '@/types/faqType'

const Faq = () => {
  const [index, setIndex] = useState<number>(0)

  return (
		<div className='text-white bg-black py-6 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>
			<h3 className='text-center text-5xl font-bold mb-6'>Sıkça Sorulan Sorular</h3>
			<div className='grid gap-3 text-xl font-medium'>
				{faqData.map((faq: IFaq, idx: number) => (
					<div key={faq.id} className='bg-neutral-800 cursor-pointer'>
						<div
							className='flex items-center justify-between p-6 transition duration-300 hover:bg-neutral-700 border-b border-black'
							onClick={() => setIndex(idx)}
						>
							<h4>{faq.question}</h4>
							{idx === index ? <FaTimes /> : <FaPlus />}
						</div>
						<div className={`faq-answer-container ${idx === index ? 'active' : ''}`}>
							<p className='transition duration-300 overflow-hidden'>{faq.answer}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Faq