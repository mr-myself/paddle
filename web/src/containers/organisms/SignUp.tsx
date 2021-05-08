import React, { FC } from 'react'
import { Col } from 'react-grid-system'
import Input from 'src/components/atoms/Input'
import PrimaryButton from 'src/components/atoms/PrimaryButton'

const SignUp: FC = () => {
  return (
    <div className="fullHeight">
      <Col style={{ height: '100%' }}>
        <div className="sign">
          <div className="sign__content">
            <span className="sign__title">Sign Up</span>
            <Input
              title="Your email"
              type="text"
              placeholder="info@aiit.ac.jp"
            />
            <Input title="Password" type="password" placeholder="******" />
            <PrimaryButton buttonName="Sign Up" />
          </div>
        </div>
      </Col>
    </div>
  )
}
export default SignUp
