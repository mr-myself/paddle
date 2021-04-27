import { Action, Dispatch } from 'redux'
import { FeedActionTypes, IFeed } from '../type'

import feedsRequest from '../api/feedsRequest'

interface IFetchFeedsAction extends Action {
  type: FeedActionTypes.FETCH_FEEDS_START
}

interface IFetchFeedsSuccess extends Action {
  type: FeedActionTypes.FETCH_FEEDS_SUCCESS
  payload: {
    feeds: IFeed[]
  }
}

interface IFetchFeedsError extends Action {
  type: FeedActionTypes.FETCH_FEEDS_ERROR
  payload: {
    error: Error
  }
}

export const fetchFeedsBegin = (): IFetchFeedsAction => ({
  type: FeedActionTypes.FETCH_FEEDS_START,
})

const fetchFeedsSuccess = (feeds: IFeed[]): IFetchFeedsSuccess => ({
  type: FeedActionTypes.FETCH_FEEDS_SUCCESS,
  payload: {
    feeds,
  },
})

const fetchFeedsError = (error: Error): IFetchFeedsError => ({
  type: FeedActionTypes.FETCH_FEEDS_ERROR,
  payload: {
    error,
  },
})

export const fetchFeeds = (sourceId: number) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchFeedsBegin())
    return feedsRequest
      .fetchFeeds(sourceId)
      .then((res) => {
        dispatch(fetchFeedsSuccess(res.data))
      })
      .catch((error) => {
        dispatch(fetchFeedsError(error))
      })
  }
}

export type FeedActions =
  | IFetchFeedsAction
  | IFetchFeedsSuccess
  | IFetchFeedsError
