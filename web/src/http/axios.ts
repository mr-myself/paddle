import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:10330', // TODO: 環境変数で渡すようにする
})
