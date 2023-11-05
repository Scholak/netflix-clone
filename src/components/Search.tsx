'use client'

import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
		<div className='group p-2 flex items-center gap-2 cursor-pointer'>
			<FaSearch />
			<input
				type='text'
				className='w-0 text-black rounded outline-none transition-all duration-300 group-hover:w-32 group-hover:px-2'
				placeholder='içerik, kişi, tür'
			/>
		</div>
	)
}

export default Search