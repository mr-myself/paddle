import { Action, Dispatch } from 'redux'
import { SignActionTypes, IUser } from '../type'
import signInRequest from '../api/signInRequest'

interface IsignAction extends Action {
  type: SignActionTypes.SIGN_IN_START
}

interface IsignSuccess extends Action {
  type: SignActionTypes.SIGN_IN_SUCCESS
  payload: {
    user: IUser
  }
}

interface IsignError extends Action {
  type: SignActionTypes.SIGN_IN_ERROR
  payload: {
    error: Error
  }
}

const signStart = (): IsignAction => ({
  type: SignActionTypes.SIGN_IN_START,
})

const signSuccess = (user: IUser): IsignSuccess => ({
  type: SignActionTypes.SIGN_IN_SUCCESS,
  payload: {
    user,
  },
})

const signError = (error: Error): IsignError => ({
  type: SignActionTypes.SIGN_IN_ERROR,
  payload: {
    error,
  },
})

export const signIn = (user: IUser) => {
  return (dispatch: Dispatch) => {
    dispatch(signStart())
    return signInRequest
      .signIn(user)
      .then((res) => {
        dispatch(signSuccess(res.data))
      })
      .catch((error) => {
        dispatch(signError(error))
      })
  }
}

export type SignInAction = IsignAction | IsignSuccess | IsignError
