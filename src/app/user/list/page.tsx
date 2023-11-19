import { SearchCard } from '@/components'
import { api } from '@/lib/api'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const ListPage = async () => {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    redirect('/login')
  }

  if (!session?.user.profileId) {
		redirect('/browse')
	}

  const response = await api.get(`/list/${session.user.profileId}`)

	console.log(response.data.lists[0].type)

  return (
		<div className='px-4 py-20 md:px-8 xl:px-16 bg-neutral-900'>
			<h5 className='flex flex-wrap items-end gap-2 text-3xl text-white font-bold mb-4 md:mb-8'>Listem</h5>
			<div className='grid gap-4 md:gap-y-16 lg:gap-y-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
				{response.data.lists.map((list: any) => (
					<SearchCard media={list} type={list.type} key={list.id} />
				))}
			</div>
		</div>
	)
}

export default ListPage