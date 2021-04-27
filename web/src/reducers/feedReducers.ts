import { IFeed, FeedActionTypes } from '../type'
import { FeedActions } from '../actions/feedActions'

export interface IFeedState {
  feeds: IFeed[]
  error: boolean
  isFetching: boolean
}

const initialState: IFeedState = {
  feeds: [],
  error: false,
  isFetching: false,
}

const reducer = (
  state: IFeedState = initialState,
  action: FeedActions
): IFeedState => {
  switch (action.type) {
    case FeedActionTypes.FETCH_FEEDS_START:
      return {
        ...state,
        isFetching: true,
      }
    case FeedActionTypes.FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        feeds: action.payload.feeds,
        error: false,
        isFetching: false,
      }
    case FeedActionTypes.FETCH_FEEDS_ERROR:
      return {
        ...state,
        error: true,
        isFetching: false,
      }
    default: {
      return state
    }
  }
}

export default reducer
