import Link from 'next/link'
import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'

const AddProfileCard = () => {
  return (
		<Link href='/create-profile' className='group flex flex-col gap-4 items-center hover:cursor-pointer'>
			<div className='w-48 h-48 flex items-center justify-center rounded border-red group-hover:border-white group-hover:bg-neutral-100'>
				<FaPlusCircle className='text-8xl text-neutral-400' />
			</div>
			<p className='text-neutral-400 text-2xl group-hover:text-white'>Profil Ekle</p>
		</Link>
	)
}

export default AddProfileCard