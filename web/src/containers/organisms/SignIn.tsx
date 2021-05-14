import React, { FC, useState, ChangeEvent } from 'react'
import { Col } from 'react-grid-system'
import { useDispatch } from 'react-redux'
import Input from 'src/components/atoms/Input'
import PrimaryButton from 'src/components/atoms/PrimaryButton'
import { signIn } from 'src/actions/signInActions'
import { IUser } from 'src/type'

const SignIn: FC = () => {
  const dispatch = useDispatch()
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
    <Col>
      <div className="sign">
        <div className="sign__content">
          <span className="sign__title">Sign In</span>
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            title="Your email"
            type="text"
            placeholder="info@aiit.ac.jp"
          />
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            title="Password"
            type="password"
            placeholder="******"
          />
          <div className="sign__button">
            <PrimaryButton buttonName="Sign In" onClick={onClick} />
          </div>
        </div>
      </div>
    </Col>
  )
}
export default SignIn
