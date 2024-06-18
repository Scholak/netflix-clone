'use client'

// Library Imports
import { MouseEventHandler } from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'

// Component Imports
import Text from '@/components/Atoms/Text'

type IQuestionProps = {
	/** Opens the accordion if question is active */
	isActive: boolean
	/** On click event handler */
	onClick: MouseEventHandler<HTMLDivElement>
	/** Question content */
	question: string
	/** Question answer content */
	answer: string
}

const Question = ({ isActive, onClick, question, answer }: IQuestionProps) => {
	return (
		<div className='bg-neutral-800 cursor-pointer'>
			<div
				className='flex items-center justify-between p-6 transition duration-300 hover:bg-neutral-700 border-b border-black'
				onClick={onClick}
			>
				<Text
					element='h4'
					size='lg'
					weight='semibold'
				>
					{question}
				</Text>
				{isActive ? <FaTimes /> : <FaPlus />}
			</div>
			<div className={`faq-answer-container ${isActive ? 'active' : ''}`}>
				<Text
					size='lg'
					className='transition duration-300 overflow-hidden'
				>
					{answer}
				</Text>
			</div>
		</div>
	)
}

export default Question
