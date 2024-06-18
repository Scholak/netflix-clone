// Component Imports
import Feature from '@/components/Molecules/Feature'

// Asset Imports
import tvImg from '@/assets/tv.png'
import tv2Img from '@/assets/tv2.png'
import phoneImg from '@/assets/phone.png'
import childImg from '@/assets/child.png'

const Features = () => {
	return (
		<div className='bg-black text-white py-8'>
			<Feature
				image={tvImg}
				title='Televizyonunuzda izleyin'
				description='Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.'
			/>
			<Feature
				image={phoneImg}
				title='Çevrimdışı izlemek için içerikleri indirin'
				description='En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.'
				reversed
			/>
			<Feature
				image={tv2Img}
				title='İstediğiniz her yerde izleyin'
				description='Telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.'
			/>
			<Feature
				image={childImg}
				title='Çocuklarınız için profiller oluşturun'
				description='Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en
							sevdikleri karakterlerle maceralara atılabilir.'
				reversed
			/>
		</div>
	)
}

export default Features
