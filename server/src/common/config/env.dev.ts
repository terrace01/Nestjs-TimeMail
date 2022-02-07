import {ConnectionOptions} from 'typeorm';

export const db = {
    "host": "127.0.0.1",
    "port": 3306,
    "username": "root",
    "password": "123456",
    "database": "timepost",
}
export const mail = {
    "host": "smtp.163.com",
    "port": 25,
    "ignoreTLS": true,
    "secure": false,
    "auth": {
        "user": "raseluxun@163.com",
        "pass": "VKUOWCQYLBCURDQQ"
    },
    "from":'"鲁迅" <raseluxun@163.com>',
}
