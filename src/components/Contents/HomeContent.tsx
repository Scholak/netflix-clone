import Link from 'next/link'
import React from 'react'
import homeBg from '@/assets/homeBg.jpg'
import tvImg from '@/assets/tv.png'
import tv2Img from '@/assets/tv2.png'
import phoneImg from '@/assets/phone.png'
import childImg from '@/assets/child.png'
import Image from 'next/image'
import { GetStartedForm } from '@/components'

const HomeContent = () => {
  return (
		<div>
			{/* Navbar and Hero Section */}
			<div className='relative gradient-bg px-2 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-60'>
				<Image src={homeBg} alt='home background image' fill className='-z-10 object-cover' />
				<nav className='flex items-center justify-between py-6'>
					<svg
						viewBox='0 0 111 30'
						version='1.1'
						xmlns='http://www.w3.org/2000/svg'
						aria-hidden='true'
						role='img'
						className='h-6 sm:h-10'
						fill='rgb(229,9,20)'
					>
						<g>
							<path d='M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z'></path>
						</g>
					</svg>
					<div className='flex items-center gap-6'>
						<select className='py-1 px-2 text-white bg-transparent outline-none border border-white rounded-md cursor-pointer'>
							<option className='text-black' selected>
								Türkçe
							</option>
							<option className='text-black'>English</option>
						</select>
						<Link href='/login' className='py-1.5 px-4 rounded-md bg-red text-white text-sm font-bold'>
							Oturum Aç
						</Link>
					</div>
				</nav>
				<div className='text-white text-center pt-40 pb-20 sm:pt-60 sm:pb-30 md:pt-80 md:pb-40 lg:pt-100 lg:pb-50'>
					<h1 className='font-bold text-4xl'>Âlâsı var!</h1>
					<h2 className='text-xl mt-4'>En iyi dizi, film, belgesel ve çok daha fazlası burada.</h2>
					<p className='leading-6 text-xl	my-6'>
						İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta
						adresinizi girmek.
					</p>
					<GetStartedForm />
				</div>
			</div>
			{/* Features Section */}
			<div className='bg-black text-white py-8'>
				{/* Feature One */}
				<div className='h-96 my-20 flex flex-col gap-6 lg:flex-row lg:gap-0 lg:items-center px-2 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-60'>
					<div className='w-full text-center lg:w-1/2 lg:text-left'>
						<h3 className='text-5xl font-bold mb-6'>Televizyonunuzda izleyin</h3>
						<p className='text-2xl leading-6 font-medium'>
							Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.
						</p>
					</div>
					<div className='relative w-full h-full lg:w-1/2'>
						<Image src={tvImg} alt='tv image' fill className='object-contain' />
					</div>
				</div>
				<div className='bg-neutral-700 h-1.5 w-full'></div>
				{/* Feature Two */}
				<div className='h-96 my-20 flex flex-col gap-6 lg:flex-row-reverse lg:gap-0 lg:items-center px-2 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-60'>
					<div className='w-full text-center lg:w-1/2 lg:text-left'>
						<h3 className='text-5xl font-bold mb-6'>Çevrimdışı izlemek için içerikleri indirin</h3>
						<p className='text-2xl leading-6 font-medium'>
							En sevdiğiniz içerikleri kolayca kaydedin ve her zaman izleyecek bir şeyleriniz olsun.
						</p>
					</div>
					<div className='relative w-full h-full lg:w-1/2'>
						<Image src={phoneImg} alt='tv image' fill className='object-contain' />
					</div>
				</div>
				<div className='bg-neutral-700 h-1.5 w-full'></div>
				{/* Feature Three */}
				<div className='h-96 my-20 flex flex-col gap-6 lg:flex-row lg:gap-0 lg:items-center px-2 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-60'>
					<div className='w-full text-center lg:w-1/2 lg:text-left'>
						<h3 className='text-5xl font-bold mb-6'>İstediğiniz her yerde izleyin</h3>
						<p className='text-2xl leading-6 font-medium'>
							Telefonda, tablette, bilgisayarda, televizyonda sınırsız film ve dizi izleyin.
						</p>
					</div>
					<div className='relative w-full h-full lg:w-1/2'>
						<Image src={tv2Img} alt='tv image' fill className='object-contain' />
					</div>
				</div>
				<div className='bg-neutral-700 h-1.5 w-full'></div>
				{/* Feature Four */}
				<div className='h-96 my-20 flex flex-col gap-6 lg:flex-row-reverse lg:gap-0 lg:items-center px-2 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-60'>
					<div className='w-full text-center lg:w-1/2 lg:text-left'>
						<h3 className='text-5xl font-bold mb-6'>Çocuklarınız için profiller oluşturun</h3>
						<p className='text-2xl leading-6 font-medium'>
							Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde çocuklarınız, sadece onlara özel bir alanda en
							sevdikleri karakterlerle maceralara atılabilir.
						</p>
					</div>
					<div className='relative w-full h-full lg:w-1/2'>
						<Image src={childImg} alt='tv image' fill className='object-contain' />
					</div>
				</div>
				<div className='bg-neutral-700 h-1.5 w-full'></div>
			</div>
		</div>
	)
}

export default HomeContent