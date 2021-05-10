import { SignActionTypes, IUser } from 'src/type'
import { SignInAction } from 'src/actions/signInActions'

export interface IUserState {
  error: boolean
  user: IUser
}

const initialState: IUserState = {
  error: false,
  user: {
    email: '',
    password: '',
  },
}

const reducer = (
  state: IUserState = initialState,
  action: SignInAction
): IUserState => {
  switch (action.type) {
    case SignActionTypes.SIGN_IN_START:
      return {
        ...state,
      }
    case SignActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      }
    case SignActionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        error: true,
      }
    default: {
      return state
    }
  }
}

export default reducer
