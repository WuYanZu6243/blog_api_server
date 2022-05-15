// 此模块用于定义文章相关功能的路由

const express = require('express')
// 创建路由对象
const router = express.Router()

// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入文章的验证规则对象
const { articleListRule,addArticleRule,updateArticleRule } = require('../schema/article')

// 获取用户数据列表路由
router.get('/article',expressJoi(articleListRule),require('../router_handler/article/articleList'))
// 添加文章数据路由
router.post('/article/:id',expressJoi(addArticleRule),require('../router_handler/article/addArticle'))
// 根据id获取文章信息
router.get('/article/:id',require('../router_handler/article/getArticleById'))
// 根据id更新文章信息
router.put('/article/:id',expressJoi(updateArticleRule),require('../router_handler/article/updateArticle'))
// 根据id删除文章
router.delete('/article/:id',require('../router_handler/article/removeArticleById'))

module.exports = router