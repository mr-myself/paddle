import React, { FC, useState } from 'react'
import { Col } from 'react-grid-system'
import Header, { HeaderNavigation } from 'src/components/molecules/Header'
import SignIn from 'src/containers/organisms/SignIn'

const SignInPage: FC = () => {
  const [currentNavigation, setCurrentNavigation] = useState(
    HeaderNavigation.headerRightMenu
  )

  const switchHeaderNavigation = (navigation: HeaderNavigation) => {
    setCurrentNavigation(navigation)
  }
  return (
    <div className="fullHeight">
      <div>
        <Header
          email=""
          currentNavigation={currentNavigation}
          OnChangeNavigation={switchHeaderNavigation}
        />
      </div>
      <Col>
        <div>
          <SignIn />
        </div>
      </Col>
    </div>
  )
}
export default SignInPage
