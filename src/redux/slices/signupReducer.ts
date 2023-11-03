import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface signUpState {
	email: string
	password: string
	planId: 0 | 1 | 2
	cardNumber: string
}

const initialState: signUpState = {
	email: '',
	password: '',
	planId: 0,
	cardNumber: '**** **** **** '
}

export const signUpSlice = createSlice({
	name: 'signup',
	initialState,
	reducers: {
		setEmail: (state, action: PayloadAction<string>) => {
			state.email = action.payload
		},
		setPassword: (state, action: PayloadAction<string>) => {
			state.password = action.payload
		},
		setPlanId: (state, action: PayloadAction<0 | 1 | 2>) => {
			state.planId = action.payload
		},
		setCardNumber: (state, action: PayloadAction<string>) => {
			state.cardNumber += action.payload.slice(action.payload.length - 4)
		},
	},
})

export const { setEmail, setPassword, setPlanId, setCardNumber } = signUpSlice.actions

export default signUpSlice.reducer
