import React, { FC } from 'react'
import { HeaderNavigation } from 'src/components/molecules/Header'
import AuthenticationForm from 'src/containers/organisms/AuthenticationForm'
import DefaultTemplate from 'src/containers/templates/DefaultTemplate'

export enum AuthType {
  SIGNUP = 'SIGNUP',
  SIGNIN = 'SIGNIN',
}

type Props = {
  authType: AuthType
}

const AuthenticationPage: FC<Props> = ({ authType }) => (
  <DefaultTemplate defaultNavigation={HeaderNavigation.headerRightMenu}>
    <AuthenticationForm authType={authType} />
  </DefaultTemplate>
)

export default AuthenticationPage
