import axios from 'axios'

const marvelAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL // Marvel API base URL
})

export default marvelAPI