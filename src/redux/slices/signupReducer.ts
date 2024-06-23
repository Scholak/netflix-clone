import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type signUpState = {
	email: string
	password: string
	planId: 0 | 1 | 2
}

const initialState: signUpState = {
	email: '',
	password: '',
	planId: 0,
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
	},
})

export const { setEmail, setPassword, setPlanId } = signUpSlice.actions

export default signUpSlice.reducer
