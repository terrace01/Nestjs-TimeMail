import axios, {AxiosRequestConfig} from 'axios'
import {ipUrl} from '../utils/config/servicePath'

//api地址
axios.defaults.baseURL = ipUrl
export const getRequest = (url: string, params = {}) => {
    return axios.get(url, {...params})
}
export const postRequest = (url: string, params: any) => {
    return axios.post(url, {...params})
}

export default axios
