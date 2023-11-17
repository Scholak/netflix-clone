import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const UserFooter = () => {
  return (
		<footer className='bg-neutral-900 px-4 pb-4 md:px-8 md:pb-8 xl:px-16'>
			<div className='mb-4 flex items-center gap-3 text-white text-xl md:gap-6'>
				<FaFacebookF className='cursor-pointer' />
				<FaInstagram className='cursor-pointer' />
				<FaTwitter className='cursor-pointer' />
				<FaYoutube className='cursor-pointer' />
			</div>
			<ul className='mb-2 text-neutral-400 columns-2 md:columns-4'>
				<li className='mb-2 text-sm hover:underline'>Sesli Betimleme</li>
				<li className='mb-2 text-sm hover:underline'>Yardım Merkezi</li>
				<li className='mb-2 text-sm hover:underline'>Hediye Kartları</li>
				<li className='mb-2 text-sm hover:underline'>Medya Merkezi</li>
				<li className='mb-2 text-sm hover:underline'>Yatırımcı İlişkileri</li>
				<li className='mb-2 text-sm hover:underline'>İş İmkanları</li>
				<li className='mb-2 text-sm hover:underline'>Kullanım Koşulları</li>
				<li className='mb-2 text-sm hover:underline'>Gizlilik</li>
				<li className='mb-2 text-sm hover:underline'>Yasal Hükümler</li>
				<li className='mb-2 text-sm hover:underline'>Çerez Tercihleri</li>
				<li className='mb-2 text-sm hover:underline'>Kurumsal Bilgiler</li>
				<li className='mb-2 text-sm hover:underline'>Bize Ulaşın</li>
			</ul>
			<button className='mb-4 p-2 text-neutral-400 border border-neutral-400'>Hizmet Kodu</button>
			<p className='text-xs text-neutral-400'>© 1997-2023 Netflix, Inc.</p>
		</footer>
	)
}

export default UserFooter