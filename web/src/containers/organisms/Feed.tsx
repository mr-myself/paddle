import React, { FC } from 'react'
import { Row, Col } from 'react-grid-system'
import { IFeed } from 'src/type'

// hasVisited will be decided by checking interests table.
type Props = {
  feed: IFeed
  hasVisited: boolean
}

const Feed: FC<Props> = ({ feed, hasVisited }) => {
  const onClick = () => {
    // create the click log (go)
    // visit the web
    window.open(feed.feedUrl, '_blank')
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
          <img src={feed.imageUrl} alt="eyecatch" />
        </div>
      </Col>
      <Col md={8}>
        <div>
          <div className="feed__title">{feed.title}</div>
          <div className="feed__sourceTitle">{feed.sourceTitle}</div>
          <div className="feed__content">{feed.content}</div>
        </div>
      </Col>
    </Row>
  )
}

export default Feed
