const mysql = require('mysql')
const MYSQL_CONFIG = require('../config/db')

const conn = mysql.createConnection(MYSQL_CONFIG)

conn.connect()

function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
    return promise
}

module.exports = exec