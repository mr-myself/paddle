import React, { FC, useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import Input from 'src/components/atoms/Input'
import PrimaryButton from 'src/components/atoms/PrimaryButton'
import { signIn } from 'src/actions/signInActions'
import { IUser } from 'src/type'
import { AuthType } from 'src/containers/pages/AuthenticationPage'

type Props = {
  authType: AuthType
}

const AuthenticationForm: FC<Props> = ({ authType }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onClick = () => {
    const user: IUser = {
      email,
      password,
    }
    if (authType === AuthType.SIGNIN) dispatch(signIn(user))
    if (authType === AuthType.SIGNUP) dispatch(signIn(user))
  }

  const title = authType === AuthType.SIGNIN ? 'Sign In' : 'Sign Up'

  return (
    <div className="sign">
      <div className="sign__content">
        <span className="sign__title">{title}</span>
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
          <PrimaryButton buttonName={title} onClick={onClick} />
        </div>
      </div>
    </div>
  )
}
export default AuthenticationForm
