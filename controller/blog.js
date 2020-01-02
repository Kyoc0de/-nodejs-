const exec = require('../mysql/mysql')


const getList = (author, keyword) => {
    let sql = `select * from blog where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }

    sql += `order by date desc;`

    return exec(sql)

}

module.exports = {
    getList
}