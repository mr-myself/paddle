import React from 'react'
import ExploreLogo from '../atoms/Explore'
import HomeLogo from '../atoms/Home'
import RssLogo from '../atoms/RssIcon'
import SignUpLogo from '../atoms/SignUp'
import SignInLogo from '../atoms/SignIn'

const Header = () => {
  return (
    <header>
      <RssLogo />
      <div style={{ position: 'absolute', right: 170, top: 0 }}>
        <ExploreLogo />
      </div>
      <div style={{ position: 'absolute', right: 280, top: 0 }}>
        <HomeLogo />
      </div>
      <div style={{ position: 'fixed', right: 70, top: 10 }}>
        <SignUpLogo />
      </div>
      <div style={{ position: 'absolute', right: 0, top: 10 }}>
        <SignInLogo />
      </div>
    </header>
  )
}

export default Header
