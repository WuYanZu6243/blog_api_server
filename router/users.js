// 此模块用于定义用户相关功能的路由

const express = require('express')
// 创建路由对象
const router = express.Router()

// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入用户的验证规则对象
const { userListRule,addUserRule,updateUserRule } = require('../schema/user')

// 获取用户数据列表路由
router.get('/users',expressJoi(userListRule),require('../router_handler/users/userList'))
// 添加用户数据路由
router.post('/users',expressJoi(addUserRule),require('../router_handler/users/addUser'))
// 根据id获取用户信息
router.get('/users/:id',require('../router_handler/users/getUserById'))
// 根据id更新用户信息
router.put('/users/:id',expressJoi(updateUserRule),require('../router_handler/users/updateUser'))
// 根据id删除用户
router.delete('/users/:id',require('../router_handler/users/removeUserById'))
// 根据id切换用户状态
router.put('/users/:id/state/:type',require('../router_handler/users/toggleStateById'))
// 根据id更换用户头像
router.put('/usersPortrait/:id',require('../router_handler/users/changePortraitById'))

module.exports = router