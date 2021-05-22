import React, { FC } from 'react'
import HeaderRightMenu from 'src/components/molecules/HeaderRightMenu'
import Explore from 'src/components/atoms/Explore'
import Home from 'src/components/atoms/Home'
import RssIcon from 'src/images/RssIcon.svg'
import { useHistory } from 'react-router'

export enum HeaderNavigation {
  home = 'home',
  explore = 'explore',
  headerRightMenu = 'headerRightMenu',
}

type Props = {
  email: string | null
  currentNavigation: HeaderNavigation
}

const Header: FC<Props> = ({ email, currentNavigation }) => {
  const history = useHistory()

  return (
    <div className="header">
      <div>
        <img src={RssIcon} alt="RssIcon" />
      </div>
      <div className="header__navigation">
        <Home
          isActive={currentNavigation === HeaderNavigation.home}
          onClick={() => history.push('/')}
        />
        <Explore
          isActive={currentNavigation === HeaderNavigation.explore}
          onClick={() => history.push('/explore')}
        />
      </div>
      <HeaderRightMenu email={email} />
    </div>
  )
}

export default Header
