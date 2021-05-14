import React, { FC } from 'react'

type Props = {
  title: string
  type: string
  placeholder: string
  onChange(value: any): void
}

const Input: FC<Props> = ({ title, type, placeholder, onChange }) => {
  return (
    <div>
      <div>
        <span className="input-subTitle ">{title}</span>
      </div>
      <input
        onChange={onChange}
        className="input"
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}
export default Input
