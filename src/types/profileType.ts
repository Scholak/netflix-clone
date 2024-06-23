import { IUser } from './userType'

export type IProfile = {
	id: number
	name: string
	userId: number
	avatar: string
	language: string
	user?: IUser
}
