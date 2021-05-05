import React, { FC, useEffect, useState } from 'react'
import { IFeed, ISource } from 'src/type'
import Feed from 'src/containers/organisms/Feed'
import { useSelector } from 'react-redux'

const FeedList: FC = () => {
  const sources = useSelector(
    (state: { source: { sources: ISource[] } }) => state.source.sources
  )
  const feeds = useSelector(
    (state: { feed: { feeds: IFeed[] } }) => state.feed.feeds
  )
  const findSource = (sourceId: number) =>
    sources.find((s) => s.id === sourceId)!

  return (
    <div className="feedList">
      <div className="feedList__title">
        <span>ALL FEEDS</span>
      </div>

      {sources && (
        <div className="feedList__body">
          {feeds.map((feed, i) => (
            <Feed
              key={feed.id}
              source={findSource(1)} // TODO
              feed={feed}
              hasVisited={i !== 0}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default FeedList
