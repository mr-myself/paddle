import React, { FC } from 'react'

type Props = {
  buttonName: string
  onClick(): void
}

const PrimaryButton: FC<Props> = ({ buttonName, onClick }) => (
  <button onClick={onClick} className="prmary-btn" type="button">
    {buttonName}
  </button>
)

export default PrimaryButton
