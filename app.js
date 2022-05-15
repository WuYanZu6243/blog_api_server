const express = require('express')
// 创建服务器实例
const app = express()
// 导入path模块
const path = require('path')

// 配置cors跨域
const cors = require('cors')
app.use(cors())

// 开放静态资源
app.use(express.static(path.join(__dirname,'/public')))

// 配置解析json格式的数据
app.use(express.json())

// 导入配置代码文件
const {optimizeSend,jwtSecretKey} = require('./config')

// 优化 res.send() 代码
app.use(optimizeSend)

// 导入解析 token 的中间件
const expressJWT = require('express-jwt')
// 配置 Token 的身份认证，Api开头的接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret:jwtSecretKey }).unless({ path: [/^\/api\//] }))

// 导入数据库连接模块
require('./model/connect')

// 导入并全局注册登录路由
app.use('/api',require('./router/login'))
// 导入并全局注册用户路由
app.use(require('./router/users'))
// 导入并全局注册文件路由
app.use(require('./router/file'))
// 导入并全局注册文章路由
app.use(require('./router/article'))

// 定义验证规则包
const joi = require('joi')
// 错误中间件
app.use(function (err, req, res, next) {
  // 数据验证失败
  if (err instanceof joi.ValidationError) return res.cc(err.message,400)
  // 未知错误
  res.cc(err.message,400)
})

// 指定端口号，并启动服务器
app.listen(3007,()=>{
    console.log('http://127.0.0.1:3007');
})

