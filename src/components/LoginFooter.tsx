import React from 'react'

const LoginFooter = () => {
  return (
		<footer className='transparent-login-footer text-neutral-400 font-medium py-12 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80'>
			<p className='mb-4'>
				Sorularınız mı var? <span className='underline'>0850-390-7444</span> numaralı telefonu arayın
			</p>
			<ul className='mb-4 text-sm columns-2 lg:columns-4'>
				<li className='underline mb-2'>SSS</li>
				<li className='underline mb-2'>Yardım Merkezi</li>
				<li className='underline mb-2'>Kullanım Koşulları</li>
				<li className='underline mb-2'>Gizlilik</li>
				<li className='underline mb-2'>Çerez Tercihleri</li>
				<li className='underline mb-2'>Kurumsal Bilgiler</li>
			</ul>
			<select
				defaultValue='tr'
				className='my-4 py-2 px-4 bg-black text-neutral-400 outline-none border border-neutral-700 rounded-sm cursor-pointer'
			>
				<option value='tr' className='text-black'>
					Türkçe
				</option>
				<option value='en' className='text-black'>
					English
				</option>
			</select>
		</footer>
	)
}

export default LoginFooter