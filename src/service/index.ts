import { BASE_URL, TIME_OUT } from './config'
import QHRequest from './request'

const qhRequest = new QHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default qhRequest
