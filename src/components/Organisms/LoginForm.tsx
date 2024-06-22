'use client'

// Library Imports
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

// Type Imports
import { ILogin } from '@/types/forms/loginType'

// Component Imports
import Text from '@/components/Atoms/Text'
import Input from '@/components/Atoms/Input'
import Button from '@/components/Atoms/Button'
import Checkbox from '@/components/Atoms/Checkbox'

// Validation Imports
import { loginSchema } from '@/validations/loginSchema'

const LoginForm = () => {
	const t = useTranslations('Molecules.LoginForm')
	const validation = useTranslations('Validation')
	const router = useRouter()

	const [authError, setAuthError] = useState<string>('')

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILogin>({
		resolver: zodResolver(loginSchema),
	})

	const onSubmit = async (data: ILogin) => {
		const status = await signIn('credentials', { email: data.email, password: data.password, redirect: false })

		if (!status?.ok && status?.error) {
			setAuthError(status.error)
		} else {
			router.push('/browse')
		}
	}

	return (
		<div className='w-full py-12 transparent-bg'>
			<div className='transparent-bg p-6 rounded-lg w-full sm:p-8 md:p-12 md:w-1/2 md:mx-auto lg:p-16 xl:w-1/4'>
				<Text
					element='h1'
					size='3xl'
					dark
					weight='bold'
					className='mb-6'
				>
					{t('title')}
				</Text>
				{authError && (
					<Text
						dark
						weight='medium'
						className='mb-2 p-3 rounded bg-orange-500'
					>
						{authError}
					</Text>
				)}
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mb-4'>
						<Input
							type='email'
							variant='gray'
							label={t('emailLabel')}
							{...register('email')}
						/>
						{errors.email && (
							<Text
								element='span'
								size='sm'
								className='text-red'
							>
								{validation(errors.email.message)}
							</Text>
						)}
					</div>
					<div className='mb-2'>
						<Input
							type='password'
							variant='gray'
							label={t('passwordLabel')}
							{...register('password')}
						/>
						{errors.password && (
							<Text
								element='span'
								size='sm'
								className='text-red'
							>
								{validation(errors.password.message)}
							</Text>
						)}
					</div>
					<Button className='w-full mt-4 mb-2 py-2 shadow'>{t('button')}</Button>
					<div className='flex flex-col gap-2 text-neutral-400 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-0'>
						<Checkbox
							name='remember'
							label={t('rememberMe')}
						/>
						<Text className='hover:underline cursor-pointer'>{t('help')}</Text>
					</div>
					<Text className='my-4 text-neutral-400'>
						{t.rich('signup', {
							link: chunks => (
								<Link
									href='/'
									className='text-white font-semibold hover:underline'
								>
									{chunks}
								</Link>
							),
						})}
					</Text>
					<Text
						element='span'
						size='xs'
						className='text-neutral-500'
					>
						{t.rich('captcha', {
							link: chunks => (
								<Text
									element='span'
									size='xs'
									className='text-sky-400 cursor-pointer hover:underline'
								>
									{chunks}
								</Text>
							),
						})}
					</Text>
				</form>
			</div>
		</div>
	)
}

export default LoginForm
