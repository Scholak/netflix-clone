'use client'

import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const CookiePreferences = () => {
  const [isActive, setIsActive] = useState<boolean>(true)

  return (
		<>
			{isActive && (
				<div className='fixed top-0 left-0 right-0 py-2 px-4 bg-white z-10'>
					<div className='mb-4 flex justify-between text-neutral-600'>
						{/* Desktop View */}
						<p className='hidden md:block'>
							Netflix ve <span className='underline font-medium'>üçüncü taraflar</span> bu web sitesi üzerinde{' '}
							<span className='underline font-medium'>çerezleri ve benzeri teknolojileri </span>kullanarak tarayıcı
							aktiviteleriniz hakkında bilgi toplar. Bu bilgiler; web sitesi kullanımınızı analiz etmek, hizmetlerimizi
							kişiselleştirmek ve çevrimiçi reklamlarımızı özelleştirmek için kullanılır. Onayınız gerektiğinde kabul
							edebilir, reddedebilir veya seçimlerinizi kişiselleştirebilirsiniz. Ayrıca her sayfanın alt kısmındaki
							“Çerez Tercihleri”ne tıklayarak tercihlerinizi istediğiniz zaman değiştirebilirsiniz. Netflix, Digital
							Advertising Alliance (Dijital Reklam Birliği) İlkelerini destekliyor.{' '}
							<span className='underline font-medium'>
								Çerezleri ve bilgileri kullanımımız hakkında daha fazla bilgi alın.
							</span>
						</p>
						{/* Mobile View */}
						<p className='md:hidden'>
							Netflix ve üçüncü taraflar çerez kullanır. <span className='underline font-medium'>(Neden?) Çerez tercihlerinizi</span> değiştirebilirsiniz.
						</p>
						<FaTimes className='translate-y-1 text-lg shrink-0 cursor-pointer' onClick={() => setIsActive(false)} />
					</div>
					<div className='flex flex-col gap-2 md:flex-row md:items-center mg:gap-4'>
						<button
							className='py-1.5 px-4 rounded-md bg-red text-white text-sm font-bold'
							onClick={() => setIsActive(false)}
						>
							Kabul et
						</button>
						<button
							className='py-1.5 px-4 rounded-md bg-red text-white text-sm font-bold'
							onClick={() => setIsActive(false)}
						>
							Reddet
						</button>
						<button
							className='py-1.5 px-4 rounded-md bg-white text-dark text-sm font-bold border border-black'
							onClick={() => setIsActive(false)}
						>
							Seçimleri kişiselleştir
						</button>
					</div>
				</div>
			)}
		</>
	)
}

export default CookiePreferences