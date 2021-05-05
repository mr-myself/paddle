import { ISource, SourceActionTypes } from 'src/type'
import { SourceActions } from 'src/actions/sourceActions'

export interface ISourceState {
  sources: ISource[]
  error: boolean
  isFetching: boolean
}

const initialState: ISourceState = {
  sources: [],
  error: false,
  isFetching: false,
}

const reducer = (
  state: ISourceState = initialState,
  action: SourceActions
): ISourceState => {
  switch (action.type) {
    case SourceActionTypes.FETCH_SOURCES_START:
      return {
        ...state,
        isFetching: true,
      }
    case SourceActionTypes.FETCH_SOURCES_SUCCESS:
      return {
        ...state,
        sources: action.payload.sources,
        error: false,
        isFetching: false,
      }
    case SourceActionTypes.FETCH_SOURCES_ERROR:
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
