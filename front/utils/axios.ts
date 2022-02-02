import axios, { AxiosRequestConfig } from 'axios'
//api地址
axios.defaults.baseURL = 'http://localhost:8080/api/v1/'
export const getRequest = (url: string, params = {}) => {
    return axios.get(url, { params: { ...params } })
}

export default axios
