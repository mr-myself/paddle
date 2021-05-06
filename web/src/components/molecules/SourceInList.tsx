import React, { FC } from 'react'
import { ISource } from 'src/type'

type Props = {
  source: ISource
  onClick(sourceId: number): void
}

const SourceInList: FC<Props> = ({ source, onClick }) => (
  <div
    className="source pointer"
    onKeyDown={() => onClick(source.id)}
    onClick={() => onClick(source.id)}
    role="link"
    tabIndex={0}
  >
    <div>
      <span className="source__title">{source.title}</span>
    </div>
    <div>
      <span className="source__count">{source.count}</span>
    </div>
  </div>
)

export default SourceInList
