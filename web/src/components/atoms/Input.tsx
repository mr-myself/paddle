import React, { FC } from 'react'

type Props = {
  title: string
  type: string
  placeholder: string
}

const Input: FC<Props> = ({ title, type, placeholder }) => (
  <div>
    <div>
      <span className="sign__subTitle">{title}</span>
    </div>
    <input className="sign__input" placeholder={placeholder} type={type} />
  </div>
)

export default Input
