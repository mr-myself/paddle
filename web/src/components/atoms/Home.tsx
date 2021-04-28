import React, { FC } from 'react'
import HomeIcon from 'src/images/Home.svg'
import HomeInactiveIcon from 'src/images/HomeInactive.svg'

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
    <img src={isActive ? HomeIcon : HomeInactiveIcon} alt="home-icon" />
    <div role="link">
      <span>Home</span>
    </div>
  </div>
)

export default Home
