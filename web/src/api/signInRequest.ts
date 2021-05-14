import { IUser } from '../type'
import axios from '../http/axios'

// Todo:signInRequest api
const signInRequest = {
  signIn: (user: IUser) => {
    return axios.get<IUser>(`/v1/sources/${user.email}/${user.password}`)
  },
}

export default signInRequest
