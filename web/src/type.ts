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
