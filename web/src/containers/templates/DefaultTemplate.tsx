import React, { FC } from 'react'
import Header, { HeaderNavigation } from 'src/components/molecules/Header'

type Props = {
  defaultNavigation: HeaderNavigation
}

const DefaultTemplate: FC<Props> = ({ children, defaultNavigation }) => (
  <div className="fullHeight">
    <Header email="info@example.com" currentNavigation={defaultNavigation} />
    {children}
  </div>
)

export default DefaultTemplate
