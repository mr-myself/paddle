import React from 'react'
import Explore from '../../images/Explore.svg'

const button: React.CSSProperties = {
  background: 'transparent',
  border: 0,
}

const ExploreLogo = () => {
  return (
    <div style={{ position: 'absolute', top: 10 }}>
      <img src={Explore} alt="explore" />
      <button type="button" style={button}>
        Explore
      </button>
    </div>
  )
}
export default ExploreLogo
