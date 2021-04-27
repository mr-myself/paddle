import React, { FC } from 'react'
import { ISource } from 'src/type'

type Props = {
  source: ISource
}

const SourceInList: FC<Props> = ({ source }) => (
  <div className="source">
    <div>
      <span className="source__title">{source.title}</span>
    </div>
    <div>
      <span className="source__count">{source.count}</span>
    </div>
  </div>
)

export default SourceInList
