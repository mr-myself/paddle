import React, { FC } from 'react'
import ExploreIcon from 'src/images/Explore.svg'
import ExploreInactiveIcon from 'src/images/ExploreInactive.svg'

type Props = {
  isActive: boolean
  onClick(): void
}

const Explore: FC<Props> = ({ isActive, onClick }) => (
  <div
    className={isActive ? 'navigation navigation--active' : 'navigation'}
    onClick={onClick}
    onKeyDown={onClick}
    role="link"
    tabIndex={0}
  >
    <img
      src={isActive ? ExploreIcon : ExploreInactiveIcon}
      alt="explore-icon"
    />
    <div role="link">
      <span>Explore</span>
    </div>
  </div>
)

export default Explore
