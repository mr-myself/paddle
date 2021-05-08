import React, { FC } from 'react'

type Props = {
  buttonName: string
}

const PrimaryButton: FC<Props> = ({ buttonName }) => (
  <button className="sign__button" type="button">
    {buttonName}
  </button>
)

export default PrimaryButton
