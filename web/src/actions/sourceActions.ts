import { Action, Dispatch } from 'redux'
import { SourceActionTypes, ISource } from 'src/type'

import sourcesRequest from 'src/api/sourcesRequest'

interface IFetchSourcesAction extends Action {
  type: SourceActionTypes.FETCH_SOURCES_START
}

interface IFetchSourcesSuccess extends Action {
  type: SourceActionTypes.FETCH_SOURCES_SUCCESS
  payload: {
    sources: ISource[]
  }
}

interface IFetchSourcesError extends Action {
  type: SourceActionTypes.FETCH_SOURCES_ERROR
  payload: {
    error: Error
  }
}

const fetchSourcesBegin = (): IFetchSourcesAction => ({
  type: SourceActionTypes.FETCH_SOURCES_START,
})

const fetchSourcesSuccess = (sources: ISource[]): IFetchSourcesSuccess => ({
  type: SourceActionTypes.FETCH_SOURCES_SUCCESS,
  payload: {
    sources,
  },
})

const fetchSourcesError = (error: Error): IFetchSourcesError => ({
  type: SourceActionTypes.FETCH_SOURCES_ERROR,
  payload: {
    error,
  },
})

export const fetchSources = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchSourcesBegin())
    return sourcesRequest
      .fetchSources()
      .then((res) => {
        dispatch(fetchSourcesSuccess(res.data))
      })
      .catch((error) => {
        dispatch(fetchSourcesError(error))
      })
  }
}

export type SourceActions =
  | IFetchSourcesAction
  | IFetchSourcesSuccess
  | IFetchSourcesError
