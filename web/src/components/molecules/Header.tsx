import React, { FC } from 'react'
import HeaderRightMenu from 'src/components/molecules/HeaderRightMenu'
import Explore from 'src/components/atoms/Explore'
import Home from 'src/components/atoms/Home'
import RssIcon from 'src/images/RssIcon.svg'

export enum HeaderNavigation {
  home = 'home',
  explore = 'explore',
}

type Props = {
  email: string | null
  currentNavigation: HeaderNavigation
  OnChangeNavigation(navigation: HeaderNavigation): void
}

const Header: FC<Props> = ({
  email,
  currentNavigation,
  OnChangeNavigation,
}) => (
  <div className="header">
    <div>
      <img src={RssIcon} alt="RssIcon" />
    </div>
    <div className="header__navigation">
      <Home
        isActive={currentNavigation === HeaderNavigation.home}
        onClick={() => OnChangeNavigation(HeaderNavigation.home)}
      />
      <Explore
        isActive={currentNavigation === HeaderNavigation.explore}
        onClick={() => OnChangeNavigation(HeaderNavigation.explore)}
      />
    </div>
    <div>
      <HeaderRightMenu email={email} />
    </div>
  </div>
)

export default Header
