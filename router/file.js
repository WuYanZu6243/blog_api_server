// 此模块用于定义 上传文件或图片 相关功能的路由

const express = require('express')
// 创建路由对象
const router = express.Router()

// 上传文件或图片
router.post('/upload',require('../router_handler/file/upload'))

module.exports = router