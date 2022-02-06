import {getRequest, postRequest} from '../utils/axios'
//获取精品歌单
// export const getMailsList = () => {
//     return getRequest(`mail`).then()
// }

export const getMailsList = (params:any) => {
    return getRequest(`mail/${params}`).then()
}


export const sendMail = (params:any) => {
    return postRequest('mail', { ...params }).then()
}
