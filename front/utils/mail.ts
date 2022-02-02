import {getRequest} from '../utils/axios'
//获取精品歌单
export const getMailsList= () => {
    return getRequest('mail').then()
}
