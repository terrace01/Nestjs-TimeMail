export const dev = {
    db: {
        "host": "127.0.0.1",
        "port": 3306,
        "username": "root",
        "password": "123456",
        "database": "timepost",
    },
    mail: {
        "host": "smtp.163.com",
        "port": 25,
        "ignoreTLS": true,
        "secure": false,
        "auth": {
            "user": "raseluxun@163.com",
            "pass": "VKUOWCQYLBCURDQQ"
        },
        "from": '"鲁迅" <raseluxun@163.com>',
    }
}
export const prod = {
    db: {
        "host": "127.0.0.1",
        "port": 3306,
        "username": "root",
        "password": "123456",
        "database": "timepost",
    },
    mail: {
        "host": "smtp.163.com",
        "port": 25,
        "ignoreTLS": true,
        "secure": false,
        "auth": {
            "user": "raseluxun@163.com",
            "pass": "VKUOWCQYLBCURDQQ"
        },
        "from": '"鲁迅" <raseluxun@163.com>',
    }
}
export const env = {
    host: process.env.DB_HOST ? prod.db.host : dev.db.host,
    port: process.env.DB_PORT ? Number(prod.db.port) : dev.db.port,
    database: process.env.DB_DATABASE ? prod.db.database : dev.db.database,
    username: process.env.DB_USERNAME ? prod.db.username : dev.db.username,
    password: process.env.DB_PASSWORD ? prod.db.password : dev.db.password,
};
