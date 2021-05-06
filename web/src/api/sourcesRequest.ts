import { ISource } from 'src/type'
import axios from 'src/http/axios'

const sourcesRequest = {
  fetchSources: () => {
    return axios.get<ISource[]>(`/v1/sources`)
  },
}

export default sourcesRequest
