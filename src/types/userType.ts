import { IProfile } from "./profileType"

export interface IUser {
  id: number       
  email: string
  password: string
  cardNumber?: string
  planId: number
  Profile?: IProfile[]
}