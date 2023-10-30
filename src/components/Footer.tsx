import React from 'react'
import { footerLinks } from '@/data/footerLinks'

const Footer = () => {
  return (
		<footer className='text-neutral-400 font-medium bg-black py-12 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>
			<p className='mb-8 text-lg'>
				Sorularınız mı var? <span className='underline'>0850-390-7444</span> numaralı telefonu arayın
			</p>
			<ul className='columns-2 lg:columns-4'>
				{footerLinks.map((link: string, idx: number) => (
					<li key={idx} className='underline mb-2'>
						{link}
					</li>
				))}
			</ul>
			<select className='my-4 py-1 px-2 text-white bg-transparent outline-none border border-white rounded-md cursor-pointer'>
				<option className='text-black' selected>
					Türkçe
				</option>
				<option className='text-black'>English</option>
			</select>
			<p className='text-sm'>Netflix Türkiye</p>
		</footer>
	)
}

export default Footer