import { SignActionTypes } from 'src/type'
import { SignInAction } from 'src/actions/signInActions'

export interface IUserState {
  error: boolean
  isSignedIn: boolean
}

const initialState: IUserState = {
  error: false,
  isSignedIn: false,
}

const reducer = (
  state: IUserState = initialState,
  action: SignInAction
): IUserState => {
  switch (action.type) {
    case SignActionTypes.SIGN_IN_START:
      return {
        ...state,
        isSignedIn: false,
      }
    case SignActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isSignedIn: true,
      }
    case SignActionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        error: true,
        isSignedIn: false,
      }
    default: {
      return state
    }
  }
}

export default reducer
