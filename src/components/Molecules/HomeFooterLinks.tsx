// Asset Imports
import { footerLinks } from '@/data/footerLinks'

const HomeFooterLinks = () => {
	return (
		<ul className='columns-2 lg:columns-4'>
			{footerLinks.map((link: string, idx: number) => (
				<li
					key={idx}
					className='underline mb-2'
				>
					{link}
				</li>
			))}
		</ul>
	)
}

export default HomeFooterLinks
