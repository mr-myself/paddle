import React, { FC, useRef, useState } from 'react'
import { Col } from 'react-grid-system'
import { useDispatch } from 'react-redux'
import Input from 'src/components/atoms/Input'
import PrimaryButton from 'src/components/atoms/PrimaryButton'
import { signIn } from 'src/actions/signInActions'
import { IUser } from 'src/type'

const SignIn: FC = () => {
  const dispatch = useDispatch()
  const textInput = useRef<any>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onClick = () => {
    const user: IUser = {
      email,
      password,
    }
    dispatch(signIn(user))
  }
  return (
    <div className="fullHeight">
      <Col>
        <div className="sign">
          <div className="sign__content">
            <span className="sign__title">Sign In</span>
            <Input
              ref={textInput}
              onChange={setEmail}
              value={email}
              title="Your email"
              type="text"
              placeholder="info@aiit.ac.jp"
            />
            <Input
              ref={textInput}
              onChange={setPassword}
              value={password}
              title="Password"
              type="password"
              placeholder="******"
            />
            <a href="/reset" className="sign__forgetPw">
              Forget password?
            </a>
            <div className="sign__button">
              <PrimaryButton buttonName="Sign In" onClick={onClick} />
            </div>
          </div>
        </div>
      </Col>
    </div>
  )
}
export default SignIn
