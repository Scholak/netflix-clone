// Library Imports
import { Metadata } from 'next'
import { ReactNode } from 'react'

// Component Imports
import SignupNavbar from '@/components/Organisms/SignupNavbar'
import SignupFooter from '@/components/Organisms/SignupFooter'

export const metadata: Metadata = {
	title: 'Netflix',
}

interface ISignupProps {
	children: ReactNode
}

const SignupLayout = ({ children }: ISignupProps) => {
	return (
		<div>
			<SignupNavbar />
			<main>{children}</main>
			<SignupFooter />
		</div>
	)
}

export default SignupLayout
