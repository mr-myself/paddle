import { FC } from 'react'
import SourceInList from 'src/components/molecules/SourceInList'
import { ISource } from 'src/type'

const SourceList: FC = () => {
  // TODO: Get from redux after connecting to API via axios
  const tmpSource1: ISource = {
    id: 1,
    title: 'はてなブックマーク',
    count: 10,
  }

  const tmpSource2: ISource = {
    id: 2,
    title: 'Qiita',
    count: 30,
  }

  return (
    <div className="sourceList">
      <SourceInList source={tmpSource1} />
      <SourceInList source={tmpSource2} />
    </div>
  )
}

export default SourceList
