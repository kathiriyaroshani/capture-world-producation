import axios from 'axios'

import { REACT_APP_BASE_URL } from './key'

export const http = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL
  baseURL: REACT_APP_BASE_URL,
})
