import { SignActionTypes } from 'src/type'
import { SignInAction } from 'src/actions/signInActions'

export interface IUserState {
  error: boolean
  signStatus: boolean
}

const initialState: IUserState = {
  error: false,
  signStatus: false,
}

const reducer = (
  state: IUserState = initialState,
  action: SignInAction
): IUserState => {
  switch (action.type) {
    case SignActionTypes.SIGN_IN_START:
      return {
        ...state,
        signStatus: false,
      }
    case SignActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signStatus: true,
      }
    case SignActionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        error: true,
        signStatus: false,
      }
    default: {
      return state
    }
  }
}

export default reducer
