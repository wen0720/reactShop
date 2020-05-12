import axios from 'axios'

const instance = axios.create({
  timeout: 150000,
  baseURL: 'https://vue-course-api.hexschool.io/api/wen0720',
  headers: {
    'content-type': 'application/json'
  }
})

export default instance
