import { IUser } from './userType'

export interface IProfile {
	id: number
	name: string
	userId: number
	avatar: string
	language: string
	user?: IUser
}
