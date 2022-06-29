import axios from 'axios'
import md5 from 'md5'

const marvelAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Marvel API base URL
  headers: {
    Accept: '*/*',
  },
  params: {
    hash: md5(new Date().getTime() + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY).toString(),
    ts: new Date().getTime(),
    apikey: process.env.REACT_APP_PUBLIC_KEY
  }
})

export default marvelAPI