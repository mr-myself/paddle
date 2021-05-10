import React from 'react'

interface IInputProps {
  title: string
  type: string
  placeholder: string
  onChange(value: any): void
}

const Input = ({ title, type, placeholder, onChange }: IInputProps) => {
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
