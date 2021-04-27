import React, { FC } from 'react'
import HomeLogo from 'src/images/Home.svg'

type Props = {
  isActive: boolean
  onClick(): void
}

const Home: FC<Props> = ({ isActive, onClick }) => (
  <div
    className={isActive ? 'navigation navigation--active' : 'navigation'}
    onClick={onClick}
    onKeyDown={onClick}
    role="link"
    tabIndex={0}
  >
    <img src={HomeLogo} alt="homelogo" />
    <div role="link">
      <span>Home</span>
    </div>
  </div>
)

export default Home
