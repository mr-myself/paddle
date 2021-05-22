import React, { FC } from 'react'
import { Container, Row, Col } from 'react-grid-system'
import IconAll from 'src/images/All.svg'
import IconAddSource from 'src/images/AddSource.svg'
import SourceList from 'src/containers/organisms/SourceList'

const FeedTemplate: FC = ({ children }) => (
  <Row className="fullHeight">
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
      <Container>{children}</Container>
    </Col>
  </Row>
)

export default FeedTemplate
