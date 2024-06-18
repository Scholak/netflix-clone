'use client'

// Library Imports
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { FaChevronRight } from 'react-icons/fa'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'

// Type Imports
import { IGetStarted } from '@/types/forms/getStrartedType'

// Component Imports
import Text from '@/components/Atoms/Text'
import Input from '@/components/Atoms/Input'
import Button from '@/components/Atoms/Button'

// Store Imports
import { setEmail } from '@/redux/slices/signupReducer'

// Service Imports
import { isExistingUser } from '@/services/userService'

// Validation Imports
import { getStartedSchema } from '@/validations/getStartedSchema'

const GetStartedForm = () => {
	const dispatch = useDispatch()
	const router = useRouter()

	const isExistingUserMutation = useMutation({
		mutationFn: isExistingUser,
		onSuccess: (exists: string) => {
			if (!exists) {
				router.push('/signup/registration')
			} else {
				dispatch(setEmail(''))
				alert('Kullanıcı zaten kayıtlı')
			}
		},
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IGetStarted>({
		resolver: zodResolver(getStartedSchema),
	})

	const onSubmit = async (data: IGetStarted) => {
		try {
			dispatch(setEmail(data.email))
			await isExistingUserMutation.mutateAsync(data)
		} catch (error: any) {
			// will be implemented...
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col items-center justify-center gap-2 sm:flex-row'
			>
				<Input
					{...register('email')}
					variant='transparent'
					placeholder='E-posta adresi'
				/>
				<Button className='flex items-center gap-3 transition duration-300 hover:bg-redHover'>
					Başlayın
					<FaChevronRight />
				</Button>
			</form>
			{errors.email && (
				<Text
					size='sm'
					align='center'
					className='mt-1 text-red'
				>
					{errors.email.message}
				</Text>
			)}
		</>
	)
}

export default GetStartedForm
