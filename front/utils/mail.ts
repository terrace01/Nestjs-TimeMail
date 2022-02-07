import {getRequest, postRequest} from '../utils/axios'
//获取精品歌单
export const getMailsAll = () => {
    return getRequest(`mail`).then()
}

export const getMailBySkip = (params:any) => {
    return getRequest(`mail/${params}`).then()
}


export const sendMail = (params:any) => {
    return postRequest('mail', { ...params }).then()
}
