import axios, { AxiosRequestConfig } from 'axios'
//api地址
axios.defaults.baseURL = 'http://localhost:8080/api/v1/'
export const getRequest = (url: string, params = {}) => {
    return axios.get(url, {  ...params })
}
export const postRequest = (url: string, params:any) => {
    return axios.post(url, { ...params  })
}

export default axios
