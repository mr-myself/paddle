import React from 'react'
import HomeLogo from '../../images/Home.svg'

const button: React.CSSProperties = {
  background: 'transparent',
  border: 0,
}

const HomeIcon = () => {
  return (
    <div style={{ position: 'absolute', top: 10 }}>
      <img src={HomeLogo} alt="homelogo" />
      <button type="button" style={button}>
        Home
      </button>
    </div>
  )
}
export default HomeIcon
