import React, { useState, ChangeEvent } from 'react'

export interface InputProps {
  title: string
  type: string
  placeholder: string
  value?: string
  onChange?: (value: string) => any
}

const Input = (
  { title, type, placeholder, value, onChange }: InputProps,
  ref: any
) => {
  const [_value, setValue] = useState(value || '')
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valueEle = e.target.value
    setValue(valueEle)
    return onChange && onChange(valueEle)
  }

  return (
    <div>
      <div>
        <span className="input-subTitle ">{title}</span>
      </div>
      <input
        value={_value}
        onChange={handleOnChange}
        ref={ref}
        className="input"
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}
export default React.forwardRef(Input)
