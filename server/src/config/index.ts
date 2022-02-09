const configFileNameObj = {
    development: 'dev',
    test: 'test',
    production: 'prod'
}

const env = process.env.NODE_ENV

export const prod = {

    "mysql": {
        "type": 'mysql',
        "host": 'localhost',
        "port": 3306,
        "username": 'root',
        "password": '123456',
        "database": 'timepost',
        "entities": [],
        "synchronize": true,
        "autoLoadEntities": true
    },
    "mail": {
        "host": "smtp.163.com",
        "port": 25,
        "ignoreTLS": true,
        "secure": false,
        "auth": {
            "user": "raseluxun@163.com",
            "pass": "VKUOWCQYLBCURDQQ"
        },
        "from": '"鲁迅" <raseluxun@163.com>'

    }
}
export const dev = {

    "mysql": {
        "type": 'mysql',
        "host": 'localhost',
        "port": 3306,
        "username": 'root',
        "password": '123456',
        "database": 'timepost',
        "entities": [],
        "synchronize": true,
        "autoLoadEntities": true
    },
    "mail": {
        "host": "smtp.163.com",
        "port": 25,
        "ignoreTLS": true,
        "secure": false,
        "auth": {
            "user": "raseluxun@163.com",
            "pass": "VKUOWCQYLBCURDQQ"
        },
        "from": '"鲁迅" <raseluxun@163.com>'

    }
}
export default () => {
    if (env == 'dev') {
        return dev
    } else {
        return prod
    }

};
