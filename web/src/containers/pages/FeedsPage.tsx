import React, { FC, useEffect } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { useDispatch } from 'react-redux'
import SourceList from 'src/containers/organisms/SourceList'
import IconAll from 'src/images/All.svg'
import IconAddSource from 'src/images/AddSource.svg'
import FeedList from 'src/containers/organisms/FeedList'

import { fetchFeeds } from '../../actions/feedActions'

const FeedsPage: FC = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const asyncFunc = () => {
      dispatch(fetchFeeds(1))
    }
    asyncFunc()
  }, [])

  return (
    <div className="fullHeight">
      <Row style={{ height: '100%' }}>
        <Col md={4} lg={3} style={{ height: '100%' }}>
          <div className="sidebar">
            <div className="sidebar__title">
              <span>FEEDS</span>
              <div>
                <img src={IconAddSource} alt="icon-add-source" />
              </div>
            </div>
            <div className="sidebar__body">
              <div className="allFeeds">
                <div className="allFeeds__title">
                  <img src={IconAll} alt="icon-all" />
                  <span>ALL FEEDS</span>
                </div>
                <div className="allFeeds__count">
                  <span>40</span>
                </div>
              </div>
              <SourceList />
            </div>
          </div>
        </Col>
        <Col md={8} lg={9}>
          <Container>
            <FeedList />
          </Container>
        </Col>
      </Row>
    </div>
  )
}

export default FeedsPage
