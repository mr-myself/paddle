import React, { FC } from 'react'

type Props = {
  email: string | null
}

const HeaderRightMenu: FC<Props> = ({ email }) => (
  <div className="rightMenu">
    {email && <span>Welcome! {email}</span>}
    {!email && (
      <>
        <a href="/signin" className="rightMenu__item">
          Sign In
        </a>
        <a href="/signup" className="rightMenu__item rightMenu__item--border">
          Sign Up
        </a>
      </>
    )}
  </div>
)

export default HeaderRightMenu
