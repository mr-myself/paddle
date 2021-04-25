import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import ExploreLogo from '../atoms/Explore'
import HomeLogo from '../atoms/Home'
import RssLogo from '../atoms/RssIcon'
import SignUpLogo from '../atoms/SignUp'
import SignInLogo from '../atoms/SignIn'

const Header = () => {
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <RssLogo />
        </Col>
        <Col sm={2}>
          <HomeLogo />
        </Col>
        <Col sm={2}>
          <ExploreLogo />
        </Col>
        <Col sm={1}>
          <SignInLogo />
        </Col>
        <Col sm={3}>
          <SignUpLogo />
        </Col>
      </Row>
    </Container>
  )
}
export default Header
