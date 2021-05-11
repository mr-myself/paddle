import { Action, Dispatch } from 'redux'
import { SignActionTypes, IUser } from '../type'
import signInRequest from '../api/signInRequest'

interface ISignAction extends Action {
  type: SignActionTypes.SIGN_IN_START
}

interface ISignSuccess extends Action {
  type: SignActionTypes.SIGN_IN_SUCCESS
  payload: {
    user: IUser
  }
}

interface ISignError extends Action {
  type: SignActionTypes.SIGN_IN_ERROR
  payload: {
    error: Error
  }
}

const signStart = (): ISignAction => ({
  type: SignActionTypes.SIGN_IN_START,
})

const signSuccess = (user: IUser): ISignSuccess => ({
  type: SignActionTypes.SIGN_IN_SUCCESS,
  payload: {
    user,
  },
})

const signError = (error: Error): ISignError => ({
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

export type SignInAction = ISignAction | ISignSuccess | ISignError
