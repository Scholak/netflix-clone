import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface signUpState {
	email: string
	password: string
}

const initialState: signUpState = {
	email: '',
	password: '',
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
	},
})

export const { setEmail, setPassword } = signUpSlice.actions

export default signUpSlice.reducer
