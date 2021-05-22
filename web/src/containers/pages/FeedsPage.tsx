import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import FeedList from 'src/containers/organisms/FeedList'
import { HeaderNavigation } from 'src/components/molecules/Header'
import { fetchSources } from 'src/actions/sourceActions'
import DefaultTemplate from 'src/containers/templates/DefaultTemplate'
import FeedTemplate from 'src/containers/templates/FeedTemplate'

const FeedsPage: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const asyncFunc = () => {
      dispatch(fetchSources())
    }
    asyncFunc()
  }, [])

  return (
    <DefaultTemplate defaultNavigation={HeaderNavigation.home}>
      <FeedTemplate>
        <FeedList />
      </FeedTemplate>
    </DefaultTemplate>
  )
}

export default FeedsPage
