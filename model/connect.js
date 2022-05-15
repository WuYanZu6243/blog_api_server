// 此模块用于使用mongoos包创建数据库连接

// 导入mongoos包
const mongoose = require('mongoose')

// 导入环境包config
const config = require('config')

// 连接数据库
const user = config.get('db.user')
const password = config.get('db.password')
const host = config.get('db.host')
const port = config.get('db.port')
const name = config.get('db.name')
mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${name}`)
    .then(()=>console.log('连接数据库成功！'))
    .catch(()=>console.log('连接数据库失败！'))