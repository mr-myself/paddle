import { FC } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import SourceList from 'src/containers/organisms/SourceList';
import IconAll from 'src/images/All.svg';
import IconAddSource from 'src/images/AddSource.svg';

const FeedsPage: FC = () => (
  <div className="fullHeight">
    <Row style={{ height: '100%' }}>
      <Col md={4} style={{ height: '100%' }}>
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
      <Col md={8}>
        <Container>
          <span>feeds list</span>
        </Container>
      </Col>
    </Row>
  </div>
);

export default FeedsPage;
