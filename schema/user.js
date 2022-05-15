const joi = require('joi')

/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */

// 用户名的验证规则
const userName = joi.string().alphanum().min(3).max(10).required()
// 密码的验证规则
const password = joi
  .string()
  .pattern(/^[\S]{6,20}$/)
  .required()
// 是否启用的验证规则
const isUsable = joi
  .string()
  .pattern(/^true$|^false$/)
  .required()
// 电话的验证规则
const phone = joi
  .string()
  .pattern(/^1(3[0-9]|5[0-3,5-9]|7[1-3,5-8]|8[0-9])\d{8}$/)
// 角色验证规则
const role = joi
  .string()
  .pattern(/^admin$|^manager$|^user$/)
  .required()
// 获取列表时，当前页码和每页显示条数不能为空,且要大于0
const query = joi.string()
const pagenum = joi.number().required()
const pagesize = joi.number().required()
  
// 登录的验证规则
exports.loginDataRule = {
  // 表示需要对 req.body 中的数据进行验证
  body: {
    userName,
    password
  }
}

// 获取用户列表的验证规则
exports.userListRule = {
  query: {
    query,
    pagenum,
    pagesize
  }
}

// 添加用户的验证规则
exports.addUserRule = {
  body: {
    userName,
    password,
    isUsable,
    phone,
    role
  }
}

// 更新用户的验证规则
exports.updateUserRule = {
  body: {
    password,
    phone,
    role
  }
}