// 此模块用于定义登录相关功能的路由

const express = require('express')
// 创建路由对象
const router = express.Router()

// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入需要的验证规则对象
const { loginDataRule } = require('../schema/user')

// 管理员登录路由
router.post('/login',expressJoi(loginDataRule),require('../router_handler/login/login'))

module.exports = router