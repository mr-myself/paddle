export interface ISource {
  id: number
  title: string
  count: number
}

export type IFeed = {
  id: number
  title: string
  sourceId: number
  url: string
  contents: string
  imageUrl: string
}

export enum FeedActionTypes {
  FETCH_FEEDS_START = '@@feeds/FETCH_FEEDS_START',
  FETCH_FEEDS_SUCCESS = '@@feeds/FETCH_FEEDS_SUCCESS',
  FETCH_FEEDS_ERROR = '@@feeds/FETCH_FEEDS_ERROR',
}

export enum SourceActionTypes {
  FETCH_SOURCES_START = '@@sources/FETCH_SOURCES_START',
  FETCH_SOURCES_SUCCESS = '@@sources/FETCH_SOURCES_SUCCESS',
  FETCH_SOURCES_ERROR = '@@sources/FETCH_SOURCES_ERROR',
}
