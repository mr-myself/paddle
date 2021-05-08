import React, { FC } from 'react'
import { Col } from 'react-grid-system'
import Input from 'src/components/atoms/Input'
import PrimaryButton from 'src/components/atoms/PrimaryButton'

const SignIn: FC = () => {
  return (
    <div className="fullHeight">
      <Col style={{ height: '100%' }}>
        <div className="sign">
          <div className="sign__content">
            <span className="sign__title">Sign In</span>
            <Input
              title="Your email"
              type="text"
              placeholder="info@aiit.ac.jp"
            />
            <Input title="Password" type="password" placeholder="******" />
            <a href="/reset" className="sign__forgetPw">
              Forget password?
            </a>
            <PrimaryButton buttonName="Sign In" />
          </div>
        </div>
      </Col>
    </div>
  )
}
export default SignIn
