import React from 'react'
import { Container, Row } from 'react-grid-system'
import ExploreLogo from '../atoms/Explore'
import HomeLogo from '../atoms/Home'
import SignUpLogo from '../atoms/SignUp'
import SignInLogo from '../atoms/SignIn'
import RssIcon from '../atoms/RssIcon'

const Header = () => {
  return (
    <Container fluid>
      <Row justify="between">
        <div>
          <RssIcon />
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
