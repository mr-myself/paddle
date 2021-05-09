import React, { FC, useState } from 'react'
import { Col } from 'react-grid-system'
import Header, { HeaderNavigation } from 'src/components/molecules/Header'
import SignUp from 'src/containers/organisms/SignUp'

const LogInPage: FC = () => {
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
          <SignUp />
        </div>
      </Col>
    </div>
  )
}
export default LogInPage
