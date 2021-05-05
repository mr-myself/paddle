import React, { FC } from 'react'
import { Row, Col } from 'react-grid-system'
import { ISource, IFeed } from 'src/type'

// hasVisited will be decided by checking interests table.
type Props = {
  source: ISource
  feed: IFeed
  hasVisited: boolean
}

const Feed: FC<Props> = ({ source, feed, hasVisited }) => {
  const onClick = () => {
    // create the click log (go)
    // visit the web
    window.open(feed.url, '_blank')
  }

  return (
    <Row
      className={hasVisited ? 'feed' : 'feed feed--visited'}
      onClick={onClick}
      onKeyDown={onClick}
      role="link"
      tabIndex={0}
    >
      <Col md={4}>
        <div className="feed__eyecatch">
          <img
            src={feed.imageUrl || 'https://dummyimage.com/600x400/000/fff'}
            alt="eyecatch"
          />
        </div>
      </Col>
      <Col md={8}>
        <div>
          <div className="feed__title">{feed.title}</div>
          <div className="feed__sourceTitle">{source.title}</div>
          <div className="feed__content">{feed.contents}</div>
        </div>
      </Col>
    </Row>
  )
}

export default Feed
