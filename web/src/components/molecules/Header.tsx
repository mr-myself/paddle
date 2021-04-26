import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import ExploreLogo from '../atoms/Explore'
import HomeLogo from '../atoms/Home'
import RssLogo from '../atoms/RssIcon'
import SignUpLogo from '../atoms/SignUp'
import SignInLogo from '../atoms/SignIn'

const Header = () => {
  return (
    <Container fluid>
      <Row justify="between">
        <div>
          <RssLogo />
        </div>
        <div>
          <HomeLogo />
        </div>
        <div>
          <ExploreLogo />
        </div>
        <div>
          <SignInLogo />
          <SignUpLogo />
        </div>
      </Row>
    </Container>
  )
}
export default Header
