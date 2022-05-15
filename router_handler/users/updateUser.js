// 此模块用于定义 更新用户数据 功能的路由的处理函数
// 这里的更新只能更新密码、电话、角色 

// 导入用户数据表操作
const Users = require('../../model/users')
// 导入密码加密包
const bcrypt = require('bcryptjs')

module.exports = async(req,res)=>{
    // 获取客户端的传参
    const id = req.params.id
    const inquireInfo = req.body
    // 对新密码进行加密
    inquireInfo.password = bcrypt.hashSync(inquireInfo.password, 10)
    // 根据传参到数据库中添加用户,返回值为新数据
    const userNewData =  await Users.findOneAndUpdate({_id:id},{
        password:inquireInfo.password,
        role:inquireInfo.role,
        phone:inquireInfo.phone
    },{new: true})
    // 更新成功
    res.cc('更新成功',200,userNewData)
}