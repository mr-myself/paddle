import { IFeed } from '../type'
import axios from '../http/axios'

const feedsRequest = {
  fetchFeeds: (sourceId: number) => {
    return axios.get<IFeed[]>(`/v1/sources/${sourceId}/feeds`)
  },
}

export default feedsRequest
