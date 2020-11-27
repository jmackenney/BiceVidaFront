import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://dn8mlk7hdujby.cloudfront.net/interview',
})

export default axiosClient
