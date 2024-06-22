// Library Imports
import { getTranslations } from 'next-intl/server'

const HomeFooterLinks = async () => {
	const t = await getTranslations('Molecules.HomeFooterLinks')

	return (
		<ul className='mb-4 columns-2 lg:columns-4'>
			{Array.from({ length: 16 }, (_, i) => i).map((_: any, idx: number) => (
				<li
					key={idx}
					className='mb-2 underline cursor-pointer'
				>
					{t(`link${idx + 1}`)}
				</li>
			))}
		</ul>
	)
}

export default HomeFooterLinks
