'use client'

// Library Imports
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch, useSelector } from 'react-redux'

// Type Imports
import { RootState } from '@/redux/store'
import { IRegister } from '@/types/forms/registerType'

// Component Imports
import Text from '@/components/Atoms/Text'
import Input from '@/components/Atoms/Input'
import Button from '@/components/Atoms/Button'
import Checkbox from '@/components/Atoms/Checkbox'

// Store Imports
import { setEmail, setPassword } from '@/redux/slices/signupReducer'

// Service Imports
import { isExistingUser } from '@/services/userService'

// Validation Imports
import { registerSchema } from '@/validations/registerSchema'

const RegisterForm = () => {
	const router = useRouter()

	const isExistingUserMutation = useMutation({
		mutationFn: isExistingUser,
		onSuccess: (exists: string) => {
			if (!exists) {
				router.push('/signup')
			} else {
				dispatch(setEmail(''))
				dispatch(setPassword(''))
				alert('Kullanıcı zaten kayıtlı')
			}
		},
	})

	const email = useSelector((state: RootState) => state.signup.email)
	const dispatch = useDispatch()

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IRegister>({
		resolver: zodResolver(registerSchema),
	})

	const onSubmit = async (data: IRegister) => {
		try {
			dispatch(setEmail(data.email))
			dispatch(setPassword(data.password))
			await isExistingUserMutation.mutateAsync(data)
		} catch (error: any) {
			// will be implemented...
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<Input
					label='E-posta'
					{...register('email')}
					defaultValue={email}
				/>
				{errors.email && (
					<Text
						element='span'
						size='xs'
						className='text-red'
					>
						{errors.email.message}
					</Text>
				)}
			</div>
			<div className='my-2'>
				<Input
					type='password'
					label='Bir parola ekleyin'
					{...register('password')}
					defaultValue={email}
				/>
				{errors.password && (
					<Text
						element='span'
						size='xs'
						className='text-red'
					>
						{errors.password.message}
					</Text>
				)}
			</div>
			<div className='flex items-center justify-between gap-4 mb-1'>
				<Checkbox
					name='checkbox'
					label='Netflix özel teklifleri e-posta ile gönderilmesin.'
				/>
			</div>
			<Button size='lg'>İleri</Button>
		</form>
	)
}

export default RegisterForm
