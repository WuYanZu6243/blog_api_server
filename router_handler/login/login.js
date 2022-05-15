// 此模块用于定义管理员登录相关功能的路由的处理函数

// 导入用户数据表操作
const Users = require('../../model/users')
// 导入密码加密解密包
const bcrypt = require('bcryptjs')
// 导入生成token字符串包
const jwt = require('jsonwebtoken')
// 导入配置代码文件中 加密和还原 Token 的 jwtSecretKey 字符串
const {jwtSecretKey} = require('../../config')

// 管理员登录的处理函数
module.exports = async (req, res) => {
    // 获取用户提交的表单数据
    const userInfo = req.body
    // 根据用户名到数据库查找数据
    const user = await Users.find({userName:userInfo.userName})
    // 不等于1表示没有这个用户，登录失败
    if(user.length !==1 ) return res.cc('登录失败!',400)
    // 验证密码是否正确
    const compareResult = bcrypt.compareSync(userInfo.password, user[0].password)
    // 密码错误，登录失败
    if(!compareResult) return res.cc('登录失败!',400)
    // 登录成功
    // 剔除敏感信息，密码和头像
    const userProcessing = {...user[0],password:'',portrait:''}
    // 剔除完毕后，用剩下的信息生成token字符串,token 有效期为 10 个小时
    const tokenStr = jwt.sign(userProcessing, jwtSecretKey, {
        expiresIn: '10h', // token 有效期为 10 个小时
    })
    res.cc('登录成功',200,{
        id:user[0]._id,
        userName:user[0].userName,
        isUsable:user[0].isUsable,
        phone:user[0].phone,
        role:user[0].role,
        portrait:user[0].portrait,
        token:'Bearer ' + tokenStr
    })
}