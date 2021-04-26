import React, { FC } from 'react'
import { IFeed } from 'src/type'
import Feed from 'src/containers/organisms/Feed'

const FeedList: FC = () => {
  // TODO: Get from reducer
  const feeds: IFeed[] = [
    {
      id: 1,
      title:
        '「トリチウム」がゆるキャラに？　復興庁「親しみやすいように」原発汚染処理水の安全PR：東京新聞 TOKYO Web',
      sourceTitle: 'はてなブックマック・1h',
      feedUrl: 'https://google.com',
      content:
        '「トリチウム」がゆるキャラに？ 復興庁「親しみやすいように」原発汚染処理水の安全PR：東京新聞 TOKYO Web 復興庁は１３日、東京電力福島第一原発の処理水に含まれる放射性物質トリチウムの安全性をＰＲする目的で作成したチラシを発表した。チラシには、トリチウムが自治体の広報で',
      imageUrl: 'https://dummyimage.com/600x400/000/fff',
    },
    {
      id: 2,
      title:
        '「トリチウム」がゆるキャラに？　復興庁「親しみやすいように」原発汚染処理水の安全PR：東京新聞 TOKYO Web',
      sourceTitle: 'はてなブックマック・1h',
      feedUrl: 'https://google.com',
      content:
        '「トリチウム」がゆるキャラに？ 復興庁「親しみやすいように」原発汚染処理水の安全PR：東京新聞 TOKYO Web 復興庁は１３日、東京電力福島第一原発の処理水に含まれる放射性物質トリチウムの安全性をＰＲする目的で作成したチラシを発表した。チラシには、トリチウムが自治体の広報で',
      imageUrl: 'https://dummyimage.com/600x400/000/fff',
    },
  ]

  return (
    <div className="feedList">
      <div className="feedList__title">
        <span>ALL FEEDS</span>
      </div>

      <div className="feedList__body">
        {feeds.map((feed, i) => (
          <Feed key={feed.id} feed={feed} hasVisited={i === 0} />
        ))}
      </div>
    </div>
  )
}

export default FeedList
