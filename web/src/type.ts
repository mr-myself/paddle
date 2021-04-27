export interface ISource {
  id: number
  title: string
  count: number
}

export interface IFeed {
  id: number
  title: string
  sourceTitle: string
  feedUrl: string
  content: string
  imageUrl: string
}

export enum FeedActionTypes {
  FETCH_FEEDS_START = '@@feeds/FETCH_FEEDS_START',
  FETCH_FEEDS_SUCCESS = '@@feeds/FETCH_FEEDS_SUCCESS',
  FETCH_FEEDS_ERROR = '@@feeds/FETCH_FEEDS_ERROR',
}
