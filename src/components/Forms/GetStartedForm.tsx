'use client'

import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const GetStartedForm = () => {
  return (
		<form className='flex flex-col items-center justify-center gap-2 sm:flex-row'>
			<input type='text' className='py-3 px-6 bg-transparent rounded border border-gray-300 placeholder:text-gray-200' placeholder='E-posta adresi' />
			<button className='flex items-center gap-3 bg-red text-white rounded py-3 px-6 text-xl font-medium transition duration-300 hover:bg-redHover'>
				<span>Başlayın</span>
				<FaChevronRight />
			</button>
		</form>
	)
}

export default GetStartedForm