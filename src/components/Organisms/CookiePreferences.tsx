'use client'

// Library Imports
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

// Component Imports
import Text from '@/components/Atoms/Text'
import Button from '@/components/Atoms/Button'

const CookiePreferences = () => {
	const [isActive, setIsActive] = useState<boolean>(true)

	return (
		<>
			{isActive && (
				<div className='fixed top-0 left-0 right-0 py-2 px-4 bg-white z-10'>
					<div className='mb-4 flex justify-between text-neutral-600'>
						{/* Desktop View */}
						<Text className='hidden md:block'>
							Netflix ve{' '}
							<Text
								element='span'
								weight='medium'
								className='underline'
							>
								üçüncü taraflar
							</Text>{' '}
							bu web sitesi üzerinde{' '}
							<Text
								element='span'
								weight='medium'
								className='underline'
							>
								çerezleri ve benzeri teknolojileri{' '}
							</Text>
							kullanarak tarayıcı aktiviteleriniz hakkında bilgi toplar. Bu bilgiler; web sitesi kullanımınızı analiz
							etmek, hizmetlerimizi kişiselleştirmek ve çevrimiçi reklamlarımızı özelleştirmek için kullanılır. Onayınız
							gerektiğinde kabul edebilir, reddedebilir veya seçimlerinizi kişiselleştirebilirsiniz. Ayrıca her sayfanın
							alt kısmındaki “Çerez Tercihleri”ne tıklayarak tercihlerinizi istediğiniz zaman değiştirebilirsiniz.
							Netflix, Digital Advertising Alliance (Dijital Reklam Birliği) İlkelerini destekliyor.{' '}
							<Text
								element='span'
								weight='medium'
								className='underline'
							>
								Çerezleri ve bilgileri kullanımımız hakkında daha fazla bilgi alın.
							</Text>
						</Text>
						{/* Mobile View */}
						<Text className='md:hidden'>
							Netflix ve üçüncü taraflar çerez kullanır.{' '}
							<Text
								element='span'
								weight='medium'
								className='underline'
							>
								(Neden?) Çerez tercihlerinizi
							</Text>{' '}
							değiştirebilirsiniz.
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
							Kabul Et
						</Button>
						<Button
							size='sm'
							onClick={() => setIsActive(false)}
						>
							Reddet
						</Button>
						<Button
							size='sm'
							onClick={() => setIsActive(false)}
							outlined
						>
							Seçimleri kişiselleştir
						</Button>
					</div>
				</div>
			)}
		</>
	)
}

export default CookiePreferences
