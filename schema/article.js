const joi = require('joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 获取列表时，当前页码和每页显示条数不能为空,且要大于0
const query = joi.string()
const pagenum = joi.number().required()
const pagesize = joi.number().required()

// 文章标题
const headline = joi.string().max(20).required()
// 文章作者
const author = joi.required()
// 文章发布时间
const time = joi.string().required()
// 文章封面
const cover = joi.string()
// 文章内容
const content = joi.string()

// 获取文章列表的验证规则
exports.articleListRule = {
  query: {
    query,
    pagenum,
    pagesize
  }
}

// 添加文章的验证规则
exports.addArticleRule = {
  body: {
    headline,
    time,
    cover,
    content
  }
}

// 更新文章的验证规则
exports.updateArticleRule = {
  body: {
    headline,
    author,
    time,
    cover,
    content
  }
}