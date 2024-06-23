import { IProfile } from './profileType'

export type IUser = {
	id: number
	email: string
	password: string
	cardNumber?: string
	planId: number
	Profile?: IProfile[]
}
